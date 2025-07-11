import { Controller, Get } from '@nestjs/common';
import { StackService } from './stack.service';

@Controller('stack')
export class StackController {
  constructor(private readonly stackService: StackService) {}
  @Get()
  getAllStack() {
    return this.stackService.getAllStack();
  }
}
