
export interface Task {
    id: string;
    name: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
    status: TaskStatus;
    callId?: string;
}

export type TaskStatus = 'Open' | 'In Progress' | 'Completed';
