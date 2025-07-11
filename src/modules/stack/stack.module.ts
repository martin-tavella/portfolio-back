import { Module } from '@nestjs/common';
import { StackService } from './stack.service';
import { StackController } from './stack.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Technology,
  TechnologySchema,
} from 'src/schemas/technology/technology.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Technology.name,
        schema: TechnologySchema,
      },
    ]),
  ],
  controllers: [StackController],
  providers: [StackService],
})
export class StackModule {}
