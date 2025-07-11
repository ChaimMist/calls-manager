import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Tag } from './tag.model';
import { SuggestedTasksTags } from './suggested-tasks-tags.model';

@Table
export class SuggestedTask extends Model<SuggestedTask> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column
  declare name: string;

  @BelongsToMany(() => Tag, () => SuggestedTasksTags)
  tags: Tag[];

}