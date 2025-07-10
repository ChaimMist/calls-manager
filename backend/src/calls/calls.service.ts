import { Injectable } from '@nestjs/common';
import { Call } from './call.model';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class CallsService {
  constructor(@InjectModel(Call) private callModel: typeof Call) {}

  async getCall(callId: string): Promise<Call | null> {
    return await Call.findOne({where: {id: callId}});
  }



}
