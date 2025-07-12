import type { Tag } from './tag.ts';


export interface SuggestedTask {
  id: string;
  name: string;
  updatedAt: string;
  createdAt: string;
  tags?: Tag[];
}

export interface SuggestedTaskDto {
  name: string;
  tagIds?: string[];
}