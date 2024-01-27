'use strict'

const expressAsyncHandler = require('express-async-handler')
const nodemailer = require('nodemailer')


const sendEmail = expressAsyncHandler(
    async (data, req, res) => {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              emailUser: process.env.MAIL_USER,
              emailPass: process.env.MAIL_PASS,
            },
          });
          
          async function main() {
            const info = await transporter.sendMail({
              from: emailUser,
              to: data.to, // list of receivers
              subject: data.subject,
              text: data.text,
              html: data.html,
            });
          
            console.log("Message sent: %s", info.messageId);
          
          main().catch(console.error);
    }
});


module.exports = { sendEmail }