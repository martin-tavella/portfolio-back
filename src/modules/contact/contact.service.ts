import { Injectable } from '@nestjs/common';
import emailSender from 'src/utils/emailSender';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class ContactService {
  async sendMail(contact: ContactDto) {
    await emailSender(contact.email, `${contact.name} /n${contact.message}}`);
    return { message: 'Email has been sent successfully' };
  }
}
