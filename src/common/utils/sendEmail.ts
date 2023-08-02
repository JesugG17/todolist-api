import nodemailer from "nodemailer";
import config from "../../../config";
import { Users } from "../../modules/auth/entities";
import { google } from 'googleapis'; 

const oAuth2 = google.auth.OAuth2;

const oAuth2Client = new oAuth2(
  config.SENDER_CLIENT_ID,
  config.SENDER_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({
  refresh_token: config.SENDER_REFRESH_TOKEN
});

// let accessToken;

const getAccessToken = async() => {
  const resp = await oAuth2Client.getAccessToken();
  console.log({resp});
}

// getAccessToken();
// console.log(accessToken);

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: config.SENDER_EMAIL,
    clientId: config.SENDER_CLIENT_ID,
    clientSecret: config.SENDER_CLIENT_SECRET,
    refreshToken: config.SENDER_REFRESH_TOKEN,
    expires: 3600
  },
  tls: {
    rejectUnauthorized: false
  }
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
