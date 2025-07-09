import type {Tag} from "./tag.ts";

export interface SuggestionI {
    id: string;
    name: string;
    tags: Tag[];
    createdAt?: string;
    updatedAt?: string;
}