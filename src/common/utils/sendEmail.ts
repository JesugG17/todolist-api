import nodemailer from "nodemailer";
import config from "../../../config";
import { Users } from "../../modules/auth/entities";

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: config.SENDER_EMAIL,
    clientId: config.SENDER_CLIENT_ID,
    clientSecret: config.SENDER_CLIENT_SECRET,
    accessToken: config.SENDER_ACCESS_TOKEN,
    refreshToken: config.SENDER_REFRESH_TOKEN,
    expires: 3600
  },
});

const href = (process.env.NODE_ENV === 'DEVELOPMENT')
             ? 'http://localhost:5173/auth/reset-password/verify'
             : 'https://tasks-api-production-3564.up.railway.app/#/auth/reset-password/verify';

export const sendEmailToResetPassword = async (user: Users, newPassword: string) => {
  await transporter.sendMail({
    from: `${config.SENDER_EMAIL} taskMailer`,
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
