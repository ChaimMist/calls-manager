import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SuggestedTask } from '../db/models/suggested-task.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSuggestedTaskBody } from './create-suggested-task-body.interface';
import { Tag } from '../db/models/tag.model';
import { CreateSuggestedTaskDto } from '../db/dto/create-suggesnted-task.dto';
import { Task } from '../db/models/task.model';

@Injectable()
export class SuggestedTasksService {
  constructor(@InjectModel(SuggestedTask) private suggestedTask: typeof SuggestedTask,
              @InjectModel(Tag) private tagModel: typeof Tag,
              @InjectModel(Task) private taskModel: typeof Task) {}

  async findAll(): Promise<SuggestedTask[]> {
    try {
      return this.suggestedTask.findAll({
        order: [['updatedAt', 'DESC']],
        include: [{ model: Tag, as: 'tags', through: { attributes: [] }}],
      });
    } catch (error) {
      throw new  InternalServerErrorException(`Error retrieving suggested tasks: ${JSON.stringify(error)}`);
    }
  }

  async create(createSuggestedTaskBody: CreateSuggestedTaskBody): Promise<SuggestedTask> {
    try {
      const suggestedTask: SuggestedTask = await this.suggestedTask.create({ name: createSuggestedTaskBody.name });
      const tags: Tag[] = await this.tagModel.findAll({
        where: {
          id: createSuggestedTaskBody.tagIds,
        },
      });
      await suggestedTask.$set('tags', tags);
      await suggestedTask.reload({ include: [{ model: Tag, as: 'tags' }] });
      return suggestedTask;
    } catch (error) {
      throw new InternalServerErrorException(`Error creating suggested task: ${JSON.stringify(error)}`);
    }
  }

  async delete(id: string): Promise<string> {
    try {
      const suggestedTask: SuggestedTask | null = await this.suggestedTask.findByPk(id);
      if (!suggestedTask) {
        throw new InternalServerErrorException(`Suggested task with id ${id} not found`);
      }
      await suggestedTask.destroy();
      return id;
    } catch (error) {
      throw error;
    }
  }

  async updateName(id: string, updatedTask: CreateSuggestedTaskDto): Promise<SuggestedTask | null> {
    try {
      const suggestedTask: SuggestedTask | null = await this.suggestedTask.findByPk(id);
      if (!suggestedTask) {
        return null;
      }
      await this.taskModel.update(
        { name: updatedTask.name }, {
        where: { originSuggestedTaskId: suggestedTask.id }
      });
      suggestedTask.name = updatedTask.name;
      await suggestedTask.save();
      return suggestedTask;
    } catch (error) {
      throw new InternalServerErrorException(`Error updating suggested task with id ${id}: ${JSON.stringify(error)}`);
    }
  }
}
