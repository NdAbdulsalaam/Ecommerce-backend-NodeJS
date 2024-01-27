const expressAsyncHandler = require('express-async-handler');
const nodemailer = require('nodemailer');

const sendEmail = expressAsyncHandler(async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });


    const info = await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: data.to,
      subject: data.subject,
      html: data.html,
      text: data.text,
    });

    console.log("Message sent: %s", info.messageId);
});

module.exports = { sendEmail } ;
