import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CallsModule } from './calls/calls.module';
import { TagsModule } from './tags/tags.module';
import { TasksModule } from './tasks/tasks.module';
import { DBModule } from './db/db.module';

@Module({
  imports: [CallsModule, TagsModule, TasksModule, DBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
