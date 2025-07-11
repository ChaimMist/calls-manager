import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript';
import { Tag } from '../tags/tag.model';
import { Task } from './task.model';

@Table
export class TaskTag extends Model<TaskTag>{
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @ForeignKey(() => Task)
  @Column
  declare taskId: string;

  @ForeignKey(() => Tag)
  @Column
  declare tagId: string;
}