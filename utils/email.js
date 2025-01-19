const nodemailer = require('nodemailer');
const sendEmail = async (options) => {
  //1- Create a transporter
  const transporter = nodemailer.createTransport({
    /* service: 'Gmail', */
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  //2- define the email option
  const mailOption = {
    from: 'shadlia Elamri <shadlia@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  //3- send the email
  await transporter.sendMail(mailOption);
};

module.exports = sendEmail;
