import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './dto/contact.dto';

@Controller('/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}
  @Post()
  async sendMail(@Body() contact: ContactDto) {
    return this.contactService.sendMail(contact);
  }
}
