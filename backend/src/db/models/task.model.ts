import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Call } from './call.model';
import { SuggestedTask } from './suggested-task.model';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskStatus } from '../../tasks/task-status.enum';

@Table
export class Task extends Model<Task, CreateTaskDto> {
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

  @ForeignKey(() => SuggestedTask)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    onDelete: 'CASCADE',
  })
  declare originSuggestedTaskId: string;

  @Column({
    type: DataType.ENUM('Open', 'In Progress', 'Completed'),
    allowNull: false,
    defaultValue: 'Open',
  })
  declare status: TaskStatus;

  @Column
  declare name: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  declare updatedAt: Date;

  @BelongsTo(() => Call)
  call: Call;

  @BelongsTo(() => SuggestedTask)
  originSuggestedTask: SuggestedTask;
}