import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST, // Địa chỉ SMTP server
        port: parseInt(process.env.EMAIL_PORT), // Port của SMTP server
        secure: parseInt(process.env.EMAIL_PORT) === 465, // Sử dụng SSL/TLS (true cho 465, false cho các cổng khác)
        auth: {
          user: process.env.EMAIL_USER, // Địa chỉ email
          pass: process.env.EMAIL_PASS, // Mật khẩu email
        },
      },
      defaults: {
        from: process.env.EMAIL_USER,
      },
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
