import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from 'src/schemas/project/project.schema';
import * as projects from './data/data.json';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}
  async getAllProjects(): Promise<Project[]> {
    const projects = await this.projectModel.find();

    if (projects.length === 0)
      throw new NotFoundException('Projects not found');

    return projects;
  }

  async seedProjects() {
    for (const project of projects) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
      await this.projectModel.updateOne({ title: project.title }, project, {
        upsert: true,
      });
    }
  }
}
