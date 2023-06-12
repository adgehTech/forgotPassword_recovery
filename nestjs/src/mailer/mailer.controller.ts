import { Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service'

@Controller('auth')
export class MailerController {
 constructor(private readonly mailerService: MailerService){}
  @Post('forgotpassword')
  sendEmail() { 
    this.mailerService.sendEmail("adgehtech@gmail.com", "6712")
      // .then((response) => res.send(response.message))
      // .catch((error) => res.status(500).send(error.message));
  };
}
