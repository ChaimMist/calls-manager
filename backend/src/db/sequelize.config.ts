import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Task } from './models/task.model';
import { SuggestedTask } from './models/suggested-task.model';
import { Call } from './models/call.model';
import { Tag } from './models/tag.model';
import { SuggestedTasksTags } from './models/suggested-tasks-tags.model';
import { CallTag } from './models/calls-tag.model';
import * as dotenv from 'dotenv';

dotenv.config();

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'calls-manager',
  models: [Call, Tag, Task, SuggestedTask, SuggestedTasksTags, CallTag],
  autoLoadModels: true,
  synchronize: process.env.IS_PROD !== 'true',
};