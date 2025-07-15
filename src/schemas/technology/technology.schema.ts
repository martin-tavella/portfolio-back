import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TechnologyDocument = Technology & Document;

@Schema({ timestamps: true })
export class Technology {
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: true })
  image: string;
  @Prop({
    type: String,
    required: true,
  })
  category: string;
  @Prop({
    type: String,
    enum: ['frontend', 'backend', 'languages', 'db', 'tools'],
    required: true,
  })
  type: string;
  @Prop({ type: Number, default: 0 })
  order: number;
  @Prop({ type: Boolean, default: true })
  active: boolean;
}

export const TechnologySchema = SchemaFactory.createForClass(Technology);
