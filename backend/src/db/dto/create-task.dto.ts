import { TaskStatus } from '../../tasks/task-status.enum';

export class CreateTaskDto {
  readonly name: string;
  readonly callId: string;
  readonly originSuggestedTaskId?: string;
  readonly status: TaskStatus;
}