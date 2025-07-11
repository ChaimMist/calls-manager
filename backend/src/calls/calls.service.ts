import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Call } from './call.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCallDto } from './dto/create-call.dto';


@Injectable()
export class CallsService {
  constructor(@InjectModel(Call) private callModel: typeof Call) {}

  async getCall(callId: string): Promise<Call | null> {
    try {
      return await this.callModel.findOne({where: {id: callId}});
    } catch (error) {
      throw new InternalServerErrorException(`Error retrieving call with id: ${callId}`, error);
    }
  }

  async getCalls(): Promise<Call[]> {
    try {
      return await this.callModel.findAll();
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving calls', error);
    }
  }

  async createCall(dto: CreateCallDto): Promise<Call> {
    try {
      return await this.callModel.create(dto);
    } catch (error) {
      throw new InternalServerErrorException(`Error creating call ${dto?.name}`, error);
    }
  }



}
