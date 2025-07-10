import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ _id: false })
export class GitHubLink {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  url: string;
}
