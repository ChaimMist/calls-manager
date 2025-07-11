import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CallTask } from '../calls/calls-tasks.model';
import { Task } from './task.model';
import { Call } from '../calls/call.model';
import { TaskTag } from './tasks-tags.model';
import { Tag } from '../tags/tag.model';

@Module({
  imports: [SequelizeModule.forFeature([Task, Call, CallTask, Tag, TaskTag])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
