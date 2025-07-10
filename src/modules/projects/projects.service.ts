import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from 'src/schemas/project/project.schema';

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

  async createProject(project: any) {
    const createdProject = new this.projectModel(project);

    return createdProject.save();
  }
}
