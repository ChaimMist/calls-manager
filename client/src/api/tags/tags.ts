import type { AxiosResponse } from 'axios';
import { axiosInstance } from '../config.ts';
import type { Tag } from '../../models/tag.ts';


export async function getTags(): Promise<Tag[]> {
  const response: AxiosResponse<Tag[], { error: string }> =  await axiosInstance.get<Tag[]>('tags');
  return response.data;
}

export async function createTag(tag: Partial<Tag>): Promise<Tag> {
  const response: AxiosResponse<Tag, { error: string }> = await axiosInstance.post<Tag>('tags', tag);
  return response.data;
}

export async function updateTag(tag: Partial<Tag>): Promise<Tag> {
  const response: AxiosResponse<Tag, { error: string }> = await axiosInstance.put<Tag>(`tags/${tag.id}`, tag);
  return response.data;
}

export async function deleteTag(id: string): Promise<string> {
  const response: AxiosResponse<string, { error: string }> = await axiosInstance.delete<string>(`tags/${id}`);
  return response.data;
}