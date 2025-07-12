import type { AxiosResponse } from 'axios';
import { axiosInstance } from '../config.ts';
import type { Task } from '../../models/task.ts';


export async function createTask(task: Partial<Task>): Promise<Task> {
  const response: AxiosResponse<Task, { error: string }> =  await axiosInstance.post<Task>('tasks', task);
  return response.data;
}

export async function updateTask(id: string, task: Partial<Task>): Promise<Task> {
  const response: AxiosResponse<Task, { error: string }> = await axiosInstance.put<Task>(`tasks/${id}`, task);
  return response.data;
}