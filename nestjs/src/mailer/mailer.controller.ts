import { Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service'

@Controller('auth')
export class MailerController {
 constructor(private readonly mailerService: MailerService){}
  @Post('forgotpassword')
  sendEmail() { 
    this.mailerService.sendEmail("adgehtech@gmail.com", "1234");
  };
}
