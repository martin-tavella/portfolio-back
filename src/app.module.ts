import { Module } from '@nestjs/common';
import { ProjectsModule } from './modules/projects/projects.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'), // Aquí está el cambio
        dbName: configService.get<string>('DB_NAME'), // Y aquí también
      }),
      inject: [ConfigService],
    }),
    ProjectsModule,
  ],
})
export class AppModule {}
