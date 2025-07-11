import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ProjectsModule } from './modules/projects/projects.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StackModule } from './modules/stack/stack.module';
import { ProjectsService } from './modules/projects/projects.service';
import { Project, ProjectSchema } from './schemas/project/project.schema';
import {
  Technology,
  TechnologySchema,
} from './schemas/technology/technology.schema';
import { StackService } from './modules/stack/stack.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        dbName: configService.get<string>('DB_NAME'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      {
        name: Project.name,
        schema: ProjectSchema,
      },
      {
        name: Technology.name,
        schema: TechnologySchema,
      },
    ]),
    ProjectsModule,
    StackModule,
  ],
  providers: [ProjectsService, StackService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly stackService: StackService,
  ) {}
  async onApplicationBootstrap() {
    await this.projectsService.seedProjects();
    await this.stackService.seedTechnologies();
  }
}
