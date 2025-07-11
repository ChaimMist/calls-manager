import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { SuggestedTasksService } from './suggested-tasks.service';
import { CreateSuggestedTaskBody } from './create-suggested-task-body.interface';

@Controller('suggested-tasks')
export class SuggestedTasksController {
  constructor(private readonly suggestedTasksService: SuggestedTasksService) {}

  @Get()
  @HttpCode(200)
  async getSuggestedTasks() {
    return await this.suggestedTasksService.findAll();
  }

  @Post()
  @HttpCode(201)
  async createSuggestedTask(@Body() createSuggestedTaskBody: CreateSuggestedTaskBody) {
    return await this.suggestedTasksService.create(createSuggestedTaskBody);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteSuggestedTask(@Body('id') id: string) {
    return await this.suggestedTasksService.delete(id);
  }

  @Put(':id')
  @HttpCode(200)
  async updateSuggestedTask(@Param('id') id: string, @Body() updatedTask: CreateSuggestedTaskBody) {
    return await this.suggestedTasksService.updateName(id, updatedTask);
  }
}
