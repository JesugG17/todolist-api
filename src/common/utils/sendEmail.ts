import nodemailer from "nodemailer";
import config from "../../../config";
import { Users } from "../../modules/auth/entities";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: config.EMAIL,
    pass: config.PASSWORD,
  },
});

export const sendEmailToResetPassword = async (user: Users) => {
  const info = await transporter.sendMail({
    from: `${config.EMAIL} taskMailer`,
    to: 'gastelumtec21@gmail.com',
    subject: "Recovery password",
    html: `
      <p>Hello ${ user.username }, this is a email to confirm your password change</p>
      <a href='https://tasks-api-production-3564.up.railway.app/#/auth/login'>Click here to reset password</a>
    `
  });

  console.log(info);
};
