import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import { CreateUserDto } from "./dto/create-user.dto";
import { Users } from "./entities";
import { generateJWT } from "../../common/utils/generateJWT";
import { googleVerify } from "../../common/utils/googleVerify";
import { sendEmailToResetPassword } from "../../common/utils/sendEmail";

export class AuthService {
  async logIn(email: string, password: string) {
    try {
      const user = (await Users.findOneBy({ email })) as Users;

      if (!user.status) {
        return {
          data: null,
          message: "This account do not exists",
          code: StatusCodes.BAD_REQUEST,
        };
      }

      if (user.google) {
        return {
          data: null,
          message: 'This user is google user',
          code: StatusCodes.UNAUTHORIZED
        }
      }
      
      const isValidPassword = bcrypt.compareSync(password, user.password);

      if (!isValidPassword) {
        console.log("here");
        return {
          data: null,
          message: "The password is incorrect",
          code: StatusCodes.BAD_REQUEST,
        };
      }

      const token = await generateJWT(user.userid);

      return {
        data: {
          user: {
            userName: user.username,
            email: user.email,
            photo: user.photourl,
          },
          token,
        },
        message: "Sign in succesfully",
        code: StatusCodes.OK,
      };
    } catch (error) {
      return {
        data: null,
        message: "A internal server error has ocurred",
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async register(createUserDto: CreateUserDto) {
    try {
      const { userName, email, password } = createUserDto;

      let newUser = await Users.findOneBy({ email });

      if (!newUser) {
        newUser = new Users();
        const salt = await bcrypt.genSalt();
        newUser.username = userName;
        newUser.email = email;
        newUser.password = bcrypt.hashSync(password, salt);
        newUser.status = true;
        newUser.google = false;
      }

      if (!newUser.status) {
        newUser.status = true;
      }

      await newUser.save();

      return {
        message: "User registered successfully!",
        data: null,
        code: StatusCodes.CREATED,
      };
    } catch (error) {
      console.log(error);
      return {
        message: "A internal server error has ocurred",
        data: null,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }
  }

  async googleSignIn(code: string) {
    const data = await googleVerify(code);

    if (!data.ok) {
      return {
        data: null,
        message: "Google sign in failed",
        code: StatusCodes.BAD_REQUEST,
      };
    }

    let user = await Users.findOneBy({ email: data.email });

    if (!user) {
      user = new Users();
      user.email = data.email as string;
      user.username = data.name as string;
      user.password = bcrypt.hashSync(":P", bcrypt.genSaltSync());
      user.google = true;
      user.status = true;
      user.photourl = data.picture as string;
      user.save();
    }

    const token = await generateJWT(user.userid);

    return {
      data: {
        user: {
          userName: user.username,
          email: user.email,
          photo: user.photourl,
        },
        token,
      },
      message: "Sign in successfully",
      code: StatusCodes.OK,
    };
  }

  async extendSession(email: string) {
    try {
      
      const user = await Users.findOneBy({ email });

      if (!user) {
        return {
          data: null,
          message: `The user with ${email} email do not exists`,
          code: StatusCodes.BAD_REQUEST
        }
      }

      const { userid } = user;

      const newToken = await generateJWT(userid);

      return {
        data: {
          user: null,
          token: newToken
        },
        message: 'Session extended successfully!',
        code: StatusCodes.OK
      }

    } catch (error) {
      return {
        data: null,
        message: 'An error has ocurred when trying extend session...',
        code: StatusCodes.INTERNAL_SERVER_ERROR
      } 
    }
  }

  async sendResetPassword(email: string, newPassword: string) {
    try {
      const user = await Users.findOneBy({ email });

      if (!user) {
        return {
          data: null,
          message: "This email do not exists",
          code: StatusCodes.BAD_REQUEST,
        };
      }

      const salt = bcrypt.genSaltSync();
      const hashedPassword = bcrypt.hashSync(newPassword, salt);

      await sendEmailToResetPassword(user, hashedPassword);

      user.isupdatingpass = true;

      await user.save();

      return {
        data: null,
        message: "Email sent sucessfully",
        code: StatusCodes.OK,
      };

    } catch (error) {
      console.log(error);
      return {
        data: null,
        message: "An error has ocurred while sending email...",
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }
  }
}
