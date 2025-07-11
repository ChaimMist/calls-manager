import { Module } from '@nestjs/common';
import { SuggestedTasksService } from './suggested-tasks.service';
import { SuggestedTasksController } from './suggested-tasks.controller';

@Module({
  providers: [SuggestedTasksService],
  controllers: [SuggestedTasksController]
})
export class SuggestedTasksModule {}
