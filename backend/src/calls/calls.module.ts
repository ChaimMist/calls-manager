import { Module } from '@nestjs/common';
import { CallsController } from './calls.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Call } from '../db/models/call.model';
import { CallsService } from './calls.service';
import { Task } from '../db/models/task.model';
import { CallTag } from '../db/models/calls-tag.model';
import { Tag } from '../db/models/tag.model';
import { SuggestedTask } from '../db/models/suggested-task.model';

@Module(
  {
    imports: [SequelizeModule.forFeature([Call, Task, Tag, CallTag, SuggestedTask])],
    controllers: [CallsController],
    providers: [CallsService],
  }
)
export class CallsModule {}