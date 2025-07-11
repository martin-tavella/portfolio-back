import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Technology } from 'src/schemas/technology/technology.schema';
import * as technologies from './data/data.json';

@Injectable()
export class StackService {
  constructor(
    @InjectModel(Technology.name) private technologyModel: Model<Technology>,
  ) {}

  async seedTechnologies() {
    for (const tech of technologies) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
      await this.technologyModel.updateOne({ name: tech.name }, tech, {
        upsert: true,
      });
    }
  }
}
