import { BelongsToMany, Column, CreatedAt, DataType, HasMany, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { Tag } from './tag.model';
import { CallTag } from './calls-tag.model';
import { CreateCallDto } from '../dto/create-call.dto';
import { Task } from './task.model';

@Table
export class Call extends Model<Call, CreateCallDto> {
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

  @BelongsToMany(()=> Tag, () => CallTag)
  tags: Tag[];

  @HasMany(() => Task)
  tasks: Task[];
}