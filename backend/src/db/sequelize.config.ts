import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Task } from './models/task.model';
import { SuggestedTask } from './models/suggested-task.model';
import { Call } from './models/call.model';
import { Tag } from './models/tag.model';
import { SuggestedTasksTags } from './models/suggested-tasks-tags.model';
import { CallTag } from './models/calls-tag.model';

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  models: [Call, Tag, Task, SuggestedTask, SuggestedTasksTags, CallTag],
  database: 'callmanager',
  autoLoadModels: true,
  synchronize: true,
};