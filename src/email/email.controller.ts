import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('email')
@ApiTags('Chức năng email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('test')
  @ApiOperation({
    summary: 'Thử chức năng email',
  })
  @ApiResponse({
    status: 200,
    description: 'Email đã được gửi',
  })
  async testSendEmail() {
    await this.emailService.testSendEmail();
    return {
      message: 'Email đã được gửi',
    };
  }
}
