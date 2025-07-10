import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './sequelize.config';


@Module({
  imports: [SequelizeModule.forRoot(sequelizeConfig)],
  controllers: [],
  providers: [],
})
export class DBModule {}