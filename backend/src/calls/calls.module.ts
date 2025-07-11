import { Module } from '@nestjs/common';
import { CallsController } from './calls.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Call } from './call.model';
import { CallsService } from './calls.service';
import { Task } from '../tasks/task.model';
import { CallTask } from './calls-tasks.model';
import { CallTag } from './calls-tag.model';
import { Tag } from '../tags/tag.model';

@Module(
  {
    imports: [SequelizeModule.forFeature([Call, Task, CallTask, Tag, CallTag])],
    controllers: [CallsController],
    providers: [CallsService],
  }
)
export class CallsModule {}