
export class CreateTaskDto {
  readonly name: string;
  readonly callId: string;
  readonly originSuggestedTaskId?: string;
}