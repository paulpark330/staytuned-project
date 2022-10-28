const nodemailer = require('nodemailer');
require('dotenv').config()

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendEmail = async (emailData) => {
  const { email, name, priceDifference, productImg, subscriptionId } = emailData;
  const mailOptions = {
    from: "dev.paulpark@gmail.com",
    to: email,
    subject: `The price of ${name} has dropped by ${priceDifference} USD!`,
    html: `
    <!doctype html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      </head>
      <body style="font-family: sans-serif;">
        <div style="display: block; margin: auto; max-width: 600px;" class="main">
          <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">The price of ${name} has dropped by ${priceDifference} USD!</h1>
          
          <img alt="product" src="${productImg}" style="width: 100%;">
          <a href="${process.env.API_URL}/unsubscribe?id=${subscriptionId}" target="_blank" >unsubscribe</a>
        </div>
        <!-- Example of invalid for email html/css, will be detected by Mailtrap: -->
        <style>
          .main { background-color: white; }
          a:hover { border-left-width: 1em; min-height: 2em; }
        </style>
      </body>
    </html>
  `,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendEmail;