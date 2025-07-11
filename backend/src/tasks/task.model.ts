import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, BelongsToMany, } from 'sequelize-typescript';
import { Tag } from '../tags/tag.model';
import { TaskTag } from './tasks-tags.model';
import { Call } from '../calls/call.model';
import { CallTask } from '../calls/calls-tasks.model';

@Table
export class Task extends Model<Task> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column
  declare name: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  declare updatedAt: Date;

  @BelongsToMany(() => Tag, () => TaskTag)
  tags: Tag[];

  @BelongsToMany(() => Call, () => CallTask)
  calls: Call[];
}