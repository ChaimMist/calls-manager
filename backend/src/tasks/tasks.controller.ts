import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '../db/models/task.model';
import { CreateTaskDto } from '../db/dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return await this.tasksService.findAll();
  }

  @Get(':callId')
  async findByCallId(@Param('callId') callId: string): Promise<Task | null> {
    return await this.tasksService.findByCallId(callId);
  }

  @Post()
  @HttpCode(201)
  async createTask(@Body() dto: CreateTaskDto): Promise<Task> {
    return await this.tasksService.createTask(dto);
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() dto: CreateTaskDto): Promise<Task> {
    return await this.tasksService.updateTask(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteTask(@Param('id') callId: string): Promise<void> {
    await this.tasksService.deleteTask(callId);
  }
}
