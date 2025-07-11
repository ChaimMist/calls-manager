import { Body, Controller, Get, Post } from '@nestjs/common';
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
  async findByCallId(callId: string): Promise<Task | null> {
    return await this.tasksService.findByCallId(callId);
  }

  @Post()
  async createTask(@Body() dto: CreateTaskDto): Promise<Task> {
    return await this.tasksService.createTask(dto);
  }


}
