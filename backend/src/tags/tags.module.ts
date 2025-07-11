import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tag } from '../db/models/tag.model';
import { Task } from '../db/models/task.model';
import { SuggestedTask } from '../db/models/suggested-task.model';
import { SuggestedTasksTags } from '../db/models/suggested-tasks-tags.model';

@Module({
  imports: [SequelizeModule.forFeature([Tag, Task, SuggestedTask, SuggestedTasksTags])],
  providers: [TagsService],
  controllers: [TagsController]
})
export class TagsModule {}
