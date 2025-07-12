
export interface Task {
    id: string;
    name: string;
    originSuggestedTaskId?: string;
    createdAt: string;
    updatedAt: string;
    status: TaskStatus;
    callId?: string;
}

export type TaskStatus = 'Open' | 'In Progress' | 'Completed';

export interface TaskDto {
    name: string;
    originSuggestedTaskId?: string;
    callId: string;
}