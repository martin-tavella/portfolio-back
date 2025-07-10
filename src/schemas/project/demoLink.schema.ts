import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ _id: false })
export class DemoLink {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  url: string;
}
