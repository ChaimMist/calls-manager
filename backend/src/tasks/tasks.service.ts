import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from '../db/models/task.model';
import { CreateTaskDto } from '../db/dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskModel: typeof Task) {
  }
  async findAll(): Promise<Task[]> {
    try {
      return await this.taskModel.findAll();
    } catch (error) {
      throw new Error(`Error retrieving tasks: ${JSON.stringify(error)}`);
    }
  }

  async findByCallId(callId: string): Promise<Task | null> {
    try {
      return await this.taskModel.findOne({
        where: { callId: callId }
      });
    } catch (error) {
      throw new Error(`Error retrieving task for callId ${callId}: ${JSON.stringify(error)}`);
    }
  }

  async createTask(dto: CreateTaskDto): Promise<Task> {
    try {
      return await this.taskModel.create(dto);
    } catch (error) {
      throw new Error(`Error creating task: ${JSON.stringify(error)}`);
    }
  }
}
