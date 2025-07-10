import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Call } from './call.model';
import { Tag } from '../tags/tag.model';


@Table
export class CallTag extends Model<CallTag> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @ForeignKey(() => Call)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare callId: string;

  @ForeignKey(() => Tag)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare tagId: string;
}