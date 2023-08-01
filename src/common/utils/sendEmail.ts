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

const href = (process.env.NODE_ENV === 'DEVELOPMENT')
             ? 'http://localhost:5173/auth/reset-password/verify'
             : 'https://tasks-api-production-3564.up.railway.app/#/auth/reset-password/verify';

export const sendEmailToResetPassword = async (user: Users, newPassword: string) => {
  await transporter.sendMail({
    from: `${config.EMAIL} taskMailer`,
    to: user.email,
    subject: "Recovery password",
    html: `
      <p>Hello ${ user.username }, this is a email to confirm your password change</p>
      <a href=${href}?e=${user.email}&p=${newPassword}>Click here to reset password</a>
    `
  });

};

// TODO
export const sendEmailToVerifyEmail = async() => [

]
