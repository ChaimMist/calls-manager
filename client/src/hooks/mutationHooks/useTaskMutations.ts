import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import type { CallRecord } from '../../models/callRecord.ts';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../consts/QueryKeys.ts';
import type { Task } from '../../models/task.ts';
import { createTask, updateTask } from '../../api/tasks/tasks.ts';

export const useCreateTask = () => {
  const clientQuery: QueryClient = useQueryClient();
  return useMutation({
    mutationKey: ['createCall'],
    mutationFn: (task: Partial<Task>): Promise<Task> => createTask(task),
    onSuccess: (newTask: Task): void => {
      toast.success('Task created successfully');
      clientQuery.setQueryData([QueryKeys.GET_CALL_BY_ID, newTask.callId], (oldCall: CallRecord | undefined) => {
        if (!oldCall) return;
        const updatedTasks: Task[] = [...(oldCall.tasks || []), newTask].sort((a: Task, b: Task): number => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        return {
          ...oldCall,
          tasks: updatedTasks
        };
      })
    }
  })
}

export const useUpdateTask = () => {
  const clientQuery: QueryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updateTask'],
    mutationFn: (task: Task): Promise<Task> => updateTask(task.id, task),
    onSuccess: (updatedTask: Task): void => {
      toast.success('Task updated successfully');
      clientQuery.setQueryData([QueryKeys.GET_CALL_BY_ID, updatedTask.callId], (oldCall: CallRecord | undefined) => {
        if (!oldCall) return;
        const updatedTasks: Task[] = oldCall.tasks.map((taskItem: Task): Task =>
          taskItem.id === updatedTask.id ? updatedTask : taskItem
        );
        updatedTasks.sort((a: Task, b: Task): number => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        return {
          ...oldCall,
          tasks: updatedTasks
        };
      })
    }
  })
}
