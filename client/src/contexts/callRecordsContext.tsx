import { type Context, createContext, type ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import type { CallRecord, CallRecordUpdateTagsDto } from '../models/callRecord.ts';
import type {Task} from "../models/task.ts";
import { useCallById, useCalls } from '../hooks/queryHooks/useCalls.ts';
import { useCreateCall, useUpdateCallTags } from '../hooks/mutationHooks/useCallsMutations.ts';
import { useCreateTask, useUpdateTask } from '../hooks/mutationHooks/useTaskMutations.ts';
import type { SuggestedTask } from '../models/suggestedTask.ts';
import type { Tag } from '../models/tag.ts';

type CallRecordsProviderContextType = {
    selectedCallRecord: CallRecord | null;
    setSelectedCallRecord: (callRecord: CallRecord | null) => void;
    selectedCallRecordSuggestedTasks: SuggestedTask[];
    selectedCallTasks: Task[];
    updateCallTask: (tasks: Task) => void;
    createCallTask: (task: Partial<Task>) => void;
    createTaskPending: boolean;
    updateCallTags: (call: CallRecordUpdateTagsDto) => void;
    calls: CallRecord[];
    createCall: (call: Partial<CallRecord>) => void;
    createCallPending: boolean;
};

const CallRecordsContext: Context<CallRecordsProviderContextType | undefined> = createContext<CallRecordsProviderContextType | undefined>(undefined);

export function CallRecordsProvider({children}: { children: ReactNode }) {
    const [selectedCall, setSelectedCallRecord] = useState<CallRecord | null>(null);
    const [selectedCallRecordSuggestedTasks, setSelectedCallRecordSuggestedTasks] = useState<SuggestedTask[]>([]);
    const [selectedCallTasks, setSelectedCallTasks] = useState<Task[]>([]);

    const {data: calls} = useCalls();
    const {data: selectedCallRecord} = useCallById(selectedCall?.id);
    const {mutateAsync: createCall, isPending: createCallPending} = useCreateCall();
    const {mutateAsync: createCallTask, isPending: createTaskPending} = useCreateTask();
    const {mutateAsync: updateCallTask} = useUpdateTask();
    const {mutateAsync: updateCallTags} = useUpdateCallTags();

  const getDistinctSuggestedTasks = useCallback((): SuggestedTask[] =>{
    const suggestedTasks: SuggestedTask[] = selectedCallRecord?.tags.flatMap((tag: Tag): SuggestedTask[]=> {
      return tag.suggestedTasks || [];
    }) || [];

    const distinctTasks: Record<string, SuggestedTask> = {};
    suggestedTasks.forEach((suggestedTask: SuggestedTask): void => {
      if (!distinctTasks[suggestedTask.id]) {
        distinctTasks[suggestedTask.id] = suggestedTask;
      }
    });

    return Object.values(distinctTasks);
  }, [selectedCallRecord?.tags])


  useEffect(() => {
        if (selectedCallRecord) {
          setSelectedCallRecordSuggestedTasks(getDistinctSuggestedTasks());
          setSelectedCallTasks(selectedCallRecord.tasks);
        }
    }, [getDistinctSuggestedTasks, selectedCallRecord]);


    return (
        <CallRecordsContext.Provider value={{
            selectedCallRecord,
            createCall,
            createCallPending,
            setSelectedCallRecord,
            selectedCallRecordSuggestedTasks,
            selectedCallTasks,
            calls,
            updateCallTask,
            updateCallTags,
            createCallTask,
            createTaskPending
        }}>
            {children}
        </CallRecordsContext.Provider>
    );
}

export function useCallRecords(): CallRecordsProviderContextType {
    const context: CallRecordsProviderContextType | undefined = useContext(CallRecordsContext);
    if (!context) throw new Error("useCallRecords must be used within a CallRecordsProvider");
    return context;
}