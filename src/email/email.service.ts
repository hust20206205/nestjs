import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}
  async testSendEmail() {
    const currentDateTime = new Date().toLocaleString();
    await this.mailerService.sendMail({
      to: process.env.EMAIL_USER,
      // to: process.env.EMAIL_USER,
      subject: currentDateTime,
      text: 'This is a test email',
    });
    return { message: 'Email đã được gửi' };
  }
}
