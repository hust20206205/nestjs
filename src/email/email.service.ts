import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}
  async sendEmail() {
    const currentDateTime = new Date().toLocaleString();
    await this.mailerService.sendMail({
      to: 'nghia.vv206205@sis.hust.edu.vn',
      subject: currentDateTime, // Đặt tiêu đề thành thời gian hiện tại
      text: 'This is a test email', // Nội dung email
    });
    return  { message:   "Email đã được gửi" };
  }
}
