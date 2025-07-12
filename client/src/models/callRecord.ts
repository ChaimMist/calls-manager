import type {Tag} from "./tag.ts";
import type {Task} from "./task.ts";

export interface CallRecord {
    name: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    tags: Tag[];
    tasks: Task[]
}

export interface CallRecordUpdateTagsDto {
    id: string;
    tagIds?: string[];
}