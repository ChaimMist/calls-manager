import { BelongsToMany, Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { SuggestedTasksTags } from './suggested-tasks-tags.model';
import { SuggestedTask } from './suggested-task.model';


@Table
export class Tag extends Model<Tag> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column
  declare name: string;

  @CreatedAt
  @Column({ field: 'created_at', defaultValue: DataType.NOW })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at', defaultValue: DataType.NOW })
  declare updatedAt?: Date;

  @BelongsToMany(() => SuggestedTask, () => SuggestedTasksTags)
  declare suggestedTasks: SuggestedTask[];
}