import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { AppService } from '../app.service';
import { CallsService } from './calls.service';
import { Call } from '../db/models/call.model';
import { CreateCallDto } from '../db/dto/create-call.dto';
import { UpdateCallBody } from './update-call-body.interface';

@Controller({
  path: 'calls',
})
export class CallsController {
  constructor(private readonly callsService: CallsService) {}
  @Get()
  async getCalls(): Promise<Call[]> {
    return await this.callsService.findAll();
  }

  @Get(':id')
  async getCall(@Param('id') id: string): Promise<Call | null> {
    return await this.callsService.findById(id);
  }

  @Post()
  @HttpCode(201)
  async createCall(@Body() createCallDto: CreateCallDto): Promise<Call> {
    return await this.callsService.createCall(createCallDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteCall (@Param('id') id: string): Promise<void> {
    await this.callsService.deleteCall(id);
  }

  @Put('/tags/:id')
  @HttpCode(200)
  async updateCallTags(@Param('id') id: string, @Body() updatedCall: UpdateCallBody): Promise<Call | null> {
    return await this.callsService.updateCallTags(id, updatedCall);
  }
}