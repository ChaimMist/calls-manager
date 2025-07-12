import type { SuggestedTask } from './suggestedTask.ts';

export interface Tag {
    name: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    suggestedTasks?: SuggestedTask[];
}
