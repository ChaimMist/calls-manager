import type { CallRecord, CallRecordUpdateTagsDto } from '../../models/callRecord.ts';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import { createCall, updateCallTags } from '../../api/calls/calls.ts';
import { QueryKeys } from '../../consts/QueryKeys.ts';
import { toast } from 'react-toastify';

export const useCreateCall = () => {
  const clientQuery: QueryClient = useQueryClient();
  return useMutation({
    mutationKey: ['createCall'],
    mutationFn: (call: Partial<CallRecord>) => createCall(call),
    onSuccess: (data: CallRecord) => {
      toast.success('Call created successfully');
      clientQuery.setQueryData([QueryKeys.GET_CALLS], (oldCalls: CallRecord[] | undefined) => {
        if (!oldCalls) return [data];
        return [...oldCalls, data].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
      })
    }
  })
}

export const useUpdateCallTags = () => {
  const clientQuery: QueryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updateCallTags'],
    mutationFn: (call: CallRecordUpdateTagsDto) => updateCallTags(call),
    onSuccess: (newCall: CallRecord) => {
      toast.success('Tags updated successfully');
      clientQuery.setQueryData([QueryKeys.GET_CALL_BY_ID, newCall.id], (oldCall: CallRecord | undefined) => {
        if (!oldCall) return [newCall];
        return {
          ...oldCall,
          tags: newCall.tags,
          tasks: newCall.tasks
        };
      });
    }
  })
}