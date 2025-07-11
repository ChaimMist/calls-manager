import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript';
import { Tag } from './tag.model';
import { SuggestedTask } from './suggested-task.model';

@Table
export class SuggestedTasksTags extends Model<SuggestedTasksTags>{
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @ForeignKey(() => SuggestedTask)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare suggestedTaskId: string;

  @ForeignKey(() => Tag)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare tagId: string;
}