import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Description {
  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  text: string;
}
