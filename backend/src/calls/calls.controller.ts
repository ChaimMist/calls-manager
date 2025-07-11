import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../app.service';
import { CallsService } from './calls.service';
import { Call } from './call.model';
import { CreateCallDto } from './dto/create-call.dto';

@Controller({
  path: 'calls',
})
export class CallsController {
  constructor(private readonly callsService: CallsService) {}
  @Get()
  async getCalls(): Promise<Call[]> {
    return await this.callsService.getCalls();
  }

  @Post()
  async createCall(@Body() createCallDto: CreateCallDto): Promise<Call> {
    return await this.callsService.createCall(createCallDto);
  }
}