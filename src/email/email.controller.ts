import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('test')
  async testSendEmail() {
    await this.emailService.testSendEmail();
    return {
      message:   "Email đã được gửi" ,
    };
  }
}
