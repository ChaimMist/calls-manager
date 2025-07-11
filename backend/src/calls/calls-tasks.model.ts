import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Call } from './call.model';
import { Task } from '../tasks/task.model';


@Table
export class CallTask extends Model<CallTask> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @ForeignKey(() => Call)
  @Column
  declare callId: string;

  @ForeignKey(() => Task)
  @Column
  declare taskId: string;
}