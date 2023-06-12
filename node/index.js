const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 3000;
require("dotenv").config();

app.use(cors());
app.use(express.json()); 

function sendEmail(recipient, message) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mail_configs = {
      from: process.env.SENDER_EMAIL,
      to: recipient,
      subject: "FIRST TRIAL EMAIL FROM NESTJS PROGRAM",
      html: `<!DOCTYPE html>
      <html lang="en" >
      <head>
        <meta charset="UTF-8">
        <title>nodejs emailing</title>
        

      </head>
      <body>
        <h1>Your verification code is: ${message}</h1>
      </body>
      </html>`,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `Error happend while sending...` });
      }
      return resolve({ message: "Email sent succesfuly" });
    });
  });
}

app.get("/hello"), (req, res) => {
  console.log('working...')
}

app.post("/auth/forgotpassword", (req, res) => {
  sendEmail("adgehtech@gmail.com", "4758") // hard codded...
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
