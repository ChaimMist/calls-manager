import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { SuggestedTasksService } from './suggested-tasks.service';
import { CreateSuggestedTaskBody } from './create-suggested-task-body.interface';
import { SuggestedTask } from '../db/models/suggested-task.model';

@Controller('suggested-tasks')
export class SuggestedTasksController {
  constructor(private readonly suggestedTasksService: SuggestedTasksService) {}

  @Get()
  @HttpCode(200)
  async getSuggestedTasks(): Promise<SuggestedTask[]> {
    return await this.suggestedTasksService.findAll();
  }

  @Post()
  @HttpCode(201)
  async createSuggestedTask(@Body() createSuggestedTaskBody: CreateSuggestedTaskBody): Promise<SuggestedTask> {
    return await this.suggestedTasksService.create(createSuggestedTaskBody);
  }

  @Delete(':id')
  @HttpCode(200)
  async deleteSuggestedTask(@Param('id') id: string): Promise<string> {
    return await this.suggestedTasksService.delete(id);
  }

  @Put(':id')
  @HttpCode(200)
  async updateSuggestedTask(@Param('id') id: string, @Body() updatedTask: CreateSuggestedTaskBody): Promise<SuggestedTask | null> {
    return await this.suggestedTasksService.updateName(id, updatedTask);
  }
}
