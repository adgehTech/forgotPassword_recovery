import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
require("dotenv").config()

@Injectable()
export class MailerService {
    sendEmail(recipient: string, message: string){
        return new Promise((resolve, reject) => {
          var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.SENDER_EMAIL,
              pass: process.env.PASSWORD
            }
          })
          
              const mail_configs = {
                from: process.env.EMAIL,
                to: recipient,
                subject: "FIRST TRIAL EMAIL FROM NESTJS PROGRAM",
                html: `<!DOCTYPE html>
                <html lang="en" >
                <head>
                  <meta charset="UTF-8">
                  <title>nestjs emailing</title>
                </head>
                <body>
                  <h1>Your verification code is: ${message}</h1>
                </body>
                </html>`
              };
              transporter.sendMail(mail_configs, function (error, info) {
                if (error) {
                  console.log(error);
                  // return { message: `Error happend while sending...` }
                  return reject({ message: `Error happend while sending...` });
                }
                // return "Email sent succesfuly"
                return resolve({ message: "Email sent succesfuly" });
              });
        });
      } 
    
}
