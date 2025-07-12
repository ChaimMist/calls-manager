import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../consts/QueryKeys.ts';
import {
  createSuggestedTask,
  deleteSuggestedTask,
  updateSuggestedTask,
} from '../../api/suggestedTasks/suggestedTasks.ts';
import type { SuggestedTask, SuggestedTaskDto } from '../../models/suggestedTask.ts';

export const useCreateSuggestedTask = () => {
  const clientQuery: QueryClient = useQueryClient();
  return useMutation({
    mutationKey: ['createCall'],
    mutationFn: (taskDto: SuggestedTaskDto): Promise<SuggestedTask> => createSuggestedTask(taskDto),
    onSuccess: (newTasks: SuggestedTask): void => {
      toast.success('Task created successfully');
      clientQuery.setQueryData([QueryKeys.GET_SUGGESTED_TASKS], (oldTasks: SuggestedTask[] | undefined): SuggestedTask[] => {
        if (!oldTasks) {
          return [newTasks];
        }
        return [...oldTasks, newTasks].sort((a: SuggestedTask, b: SuggestedTask): number => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
      })
    }
  })
}

export const useUpdateSuggestedTask = () => {
  const clientQuery: QueryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updateSuggestedTask'],
    mutationFn: (suggestedTask: Partial<SuggestedTask>): Promise<SuggestedTask> => updateSuggestedTask(suggestedTask),
    onSuccess: (updatedSuggestedTaskTask: SuggestedTask): void => {
      toast.success('Suggested task updated successfully');
      clientQuery.setQueryData([QueryKeys.GET_SUGGESTED_TASKS], (oldSuggestedTasks: SuggestedTask[] | undefined): SuggestedTask[] => {
        if (!oldSuggestedTasks) return [updatedSuggestedTaskTask];
        const updatedTasks: SuggestedTask[] = oldSuggestedTasks.map((suggestedTaskItem: SuggestedTask): SuggestedTask =>
          suggestedTaskItem.id === updatedSuggestedTaskTask.id ? updatedSuggestedTaskTask : suggestedTaskItem
        );
        updatedTasks.sort((a: SuggestedTask, b: SuggestedTask): number => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        return updatedTasks;
      })
    }
  })
}

export const useDeleteSuggestedTask = () => {
  const clientQuery: QueryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deleteSuggestedTask'],
    mutationFn: (id: string): Promise<string> => deleteSuggestedTask(id),
    onSuccess: (id: string): void => {
      toast.success('Suggested task deleted successfully');
      clientQuery.setQueryData([QueryKeys.GET_SUGGESTED_TASKS], (oldSuggestedTasks: SuggestedTask[] | undefined): SuggestedTask[] => {
        if (!oldSuggestedTasks) return [];
        return oldSuggestedTasks.filter((task: SuggestedTask): boolean => task.id !== id);
      })
    }
  })
}