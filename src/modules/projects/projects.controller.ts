import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}
  @Get()
  getAllProjects() {
    return this.projectsService.getAllProjects();
  }

  @Post('new')
  createProject(@Body() project: any) {
    return this.projectsService.createProject(project);
  }
}
