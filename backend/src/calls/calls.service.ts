import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Call } from '../db/models/call.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCallDto } from '../db/dto/create-call.dto';
import { Tag } from '../db/models/tag.model';
import { Task } from '../db/models/task.model';
import { SuggestedTask } from '../db/models/suggested-task.model';
import { UpdateCallBody } from './update-call-body.interface';


@Injectable()
export class CallsService {
  constructor(@InjectModel(Call) private callModel: typeof Call,
              @InjectModel(Tag) private tagModel: typeof Tag) {}

  async findById(callId: string): Promise<Call | null> {
    try {
      return await this.callModel.findByPk(callId, {
        include: [
          { model: Tag, as: 'tags', attributes: ['id', 'name'] ,
            include: [
              { model: SuggestedTask, as: 'suggestedTasks', attributes: ['id', 'name'] }
            ]
          },
          { model: Task, as: 'tasks', attributes: { exclude: [] } }
        ]});
    } catch (error) {
      throw new InternalServerErrorException(`Error retrieving call with id: ${callId}: ${JSON.stringify(error)}`);
    }
  }

  async findAll(): Promise<Call[]> {
    try {
      return await this.callModel.findAll({ order: [['updatedAt', 'DESC']], });
    } catch (error) {
      throw new InternalServerErrorException(`Error retrieving calls: ${JSON.stringify(error)}`);
    }
  }

  async createCall(dto: CreateCallDto): Promise<Call> {
    try {
      return await this.callModel.create(dto);
    } catch (error) {
      throw new InternalServerErrorException(`Error creating call ${dto?.name}`, error);
    }
  }

  async deleteCall(callId: string): Promise<void> {
    try {
      await this.callModel.destroy({where: {id: callId}});
    } catch (error) {
      throw new InternalServerErrorException(`Error deleting call with id: ${callId}`, error);
    }
  }

  async updateCallTags(callId: string, updatedCall: UpdateCallBody): Promise<Call | null> {
    try {
      const call: Call | null = await this.callModel.findByPk(callId);
      if (!call) {
        return null;
      }
      const tags: Tag[] = await this.tagModel.findAll({
        where: {
          id: updatedCall.tagIds,
        },
      });
      await call.$set('tags', tags);
      return this.findById(callId);
    } catch (error) {
      throw new InternalServerErrorException(`Error updating call with id: ${callId}`, error);
    }
  }

}
