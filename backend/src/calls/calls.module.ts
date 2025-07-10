import { Module } from '@nestjs/common';
import { CallsController } from './calls.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Call } from './call.model';
import { CallsService } from './calls.service';

@Module(
  {
    imports: [SequelizeModule.forFeature([Call])],
    controllers: [CallsController],
    providers: [CallsService],
  }
)
export class CallsModule {}