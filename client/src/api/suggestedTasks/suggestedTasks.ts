import type { AxiosResponse } from 'axios';
import { axiosInstance } from '../config.ts';
import type { SuggestedTask, SuggestedTaskDto } from '../../models/suggestedTask.ts';

export async function createSuggestedTask(suggestedTaskDto: SuggestedTaskDto): Promise<SuggestedTask> {
  const response: AxiosResponse<SuggestedTask, { error: string }> =  await axiosInstance.post<SuggestedTask>('suggested-tasks', suggestedTaskDto);
  return response.data;
}

export async function getSuggestedTasks(): Promise<SuggestedTask[]> {
  const response: AxiosResponse<SuggestedTask[], { error: string }> =  await axiosInstance.get<SuggestedTask[]>('suggested-tasks');
  return response.data;
}

export async function updateSuggestedTask(suggestedTask: Partial<SuggestedTask>): Promise<SuggestedTask> {
  const response: AxiosResponse<SuggestedTask, { error: string }> = await axiosInstance.put<SuggestedTask>(`suggested-tasks/${suggestedTask.id}`, suggestedTask);
  return response.data;
}

export async function deleteSuggestedTask(id: string): Promise<string> {
  const response: AxiosResponse<string, { error: string }> = await axiosInstance.delete<string>(`suggested-tasks/${id}`);
  return response.data;
}


