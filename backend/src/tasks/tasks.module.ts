import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from '../db/models/task.model';
import { Call } from '../db/models/call.model';
import { Tag } from '../db/models/tag.model';

@Module({
  imports: [SequelizeModule.forFeature([Task, Call, Tag])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
