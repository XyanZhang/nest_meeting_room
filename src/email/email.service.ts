import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { createTransport, Transporter} from 'nodemailer';

@Injectable()
export class EmailService {
  
  transporter: Transporter
      
  constructor() {
    this.transporter = createTransport({
        host: "smtp.qq.com",
        port: 587,
        secure: false,
        auth: {
            user: '你的邮箱地址',
            pass: '你的授权码'
        },
    });
  }
  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: '会议室预定系统',
        address: '你的邮箱地址'
      },
      to,
      subject,
      html
    });
  }

  create(createEmailDto: CreateEmailDto) {
    return 'This action adds a new email';
  }

  findAll() {
    return `This action returns all email`;
  }

  findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }
}
