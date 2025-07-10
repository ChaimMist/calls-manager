import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';


@Table
export class Tag extends Model<Tag> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column
  name: string;

  @CreatedAt
  @Column({ field: 'created_at', defaultValue: DataType.NOW })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at', defaultValue: DataType.NOW })
  declare updatedAt?: Date;
}