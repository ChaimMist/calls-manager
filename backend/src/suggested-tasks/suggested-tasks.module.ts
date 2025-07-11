import { Module } from '@nestjs/common';
import { SuggestedTasksService } from './suggested-tasks.service';
import { SuggestedTasksController } from './suggested-tasks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SuggestedTask } from '../db/models/suggested-task.model';
import { Tag } from '../db/models/tag.model';

@Module({
  imports: [SequelizeModule.forFeature([SuggestedTask, Tag])],
  providers: [SuggestedTasksService],
  controllers: [SuggestedTasksController]
})
export class SuggestedTasksModule {}
