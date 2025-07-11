import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Description } from './description.schema';
import { GitHubLink } from './githubLink.schema';
import { DemoLink } from './demoLink.schema';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [Description], required: true })
  description: Description[];

  @Prop({ type: [String], required: true })
  technologies: string[];

  @Prop({ type: [GitHubLink], required: true })
  github: GitHubLink[];

  @Prop({ required: true })
  image: string[];

  @Prop({ type: [DemoLink], required: true })
  demos: DemoLink[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
