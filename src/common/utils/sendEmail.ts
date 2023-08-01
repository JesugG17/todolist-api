import nodemailer from "nodemailer";
import config from "../../../config";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: config.EMAIL,
    pass: config.PASSWORD,
  },
});

export const sendMail = async (userEmail: string) => {
  const info = await transporter.sendMail({
    from: `${config.EMAIL} taskMailer`,
    to: 'gastelumtec21@gmail.com',
    subject: "Test email",
    text: "This is a test email",
  });

  console.log(info);
};
