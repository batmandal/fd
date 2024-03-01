import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export const sendEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;

  try {
    const options: SMTPTransport.Options = {
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "batmandal98832221@gmail.com",
        pass: "boda euts bfjk qpkg",
      },
    };

    const transporter = nodemailer.createTransport(options);

    const mailOptions = {
      from: "batmandal98832221@gmail.com",
      to: email,
      subject: "Hello from Nodemailer",
      text: "This is a test email sent using Nodemailer",
    };

    await transporter.sendMail(mailOptions);

    res.json("Email sent!");
  } catch (error) {
    res.status(500).json(error);
  }
};
