import {type Context, createContext, type ReactNode, useCallback, useContext, useState} from "react";
import type {CallRecord} from "../models/callRecord.ts";
import type {Tag} from "../models/tag.ts";
import type {Task} from "../models/task.ts";

type CallRecordsProviderContextType = {
    selectedCallRecord: CallRecord | null;
    setSelectedCallRecord: (callRecord: CallRecord | null) => void;
    editSelectedCallTags: (tags: Tag[]) => void;
    editSelectedCallTasks: (tasks: Task) => void;
    addSelectedCallTask: (task: Task) => void;
    calls: CallRecord[];
    addCall: (call: CallRecord) => void;
};

const CallRecordsContext: Context<CallRecordsProviderContextType | undefined> = createContext<CallRecordsProviderContextType | undefined>(undefined);

export function CallRecordsProvider({children}: { children: ReactNode }) {
    const [selectedCallRecord, setSelectedCallRecord] = useState<CallRecord | null>(null);
    const [calls, setCalls] = useState<CallRecord[]>([
        {
            id: '1',
            name: 'Call 1',
            updatedAt: '2023-10-01T12:00:00Z',
            createdAt: '2023-10-01T12:00:00Z',
            tags: [],
            tasks: []
        },
        {
            id: '2',
            name: 'Call 2',
            updatedAt: '2023-10-02T12:00:00Z',
            createdAt: '2023-10-02T12:00:00Z',
            tags: [],
            tasks: []
        },
        {
            id: '3',
            name: 'Call 3',
            updatedAt: '2023-10-03T12:00:00Z',
            createdAt: '2023-10-03T12:00:00Z',
            tags: [],
            tasks: []
        }
    ]);

    const addCall = (call: CallRecord): void => {
        setCalls((prevCalls: CallRecord[]): CallRecord[] =>
            [...prevCalls, call].sort((a: CallRecord, b: CallRecord): number =>
                new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()));
    }

    const addSelectedCallTask = useCallback((task: Task): void => {
        if (selectedCallRecord) {
            setSelectedCallRecord({
                ...selectedCallRecord,
                tasks: [...selectedCallRecord.tasks, task]
            });
            setCalls((prevCalls: CallRecord[]): CallRecord[] =>
                prevCalls.map((call: CallRecord): CallRecord =>
                    call.id === selectedCallRecord.id ? {...call, tasks: [...call.tasks, task]} : call
                )
            );
        }
    }, [selectedCallRecord]);

    const editSelectedCallTasks = useCallback((tasks: Task): void => {
        if (selectedCallRecord) {
            setSelectedCallRecord({
                ...selectedCallRecord,
                tasks: selectedCallRecord.tasks.map((task: Task): Task =>
                    task.id === tasks.id ? {...task, ...tasks} : task
                )
            });
            setCalls((prevCalls: CallRecord[]): CallRecord[] =>
                prevCalls.map((call: CallRecord): CallRecord =>
                    call.id === selectedCallRecord.id ? {
                        ...call,
                        tasks: call.tasks.map((task: Task): Task =>
                            task.id === tasks.id ? {...task, ...tasks} : task
                        )
                    } : call
                )
            );
        }
    }, [selectedCallRecord]);

    const editSelectedCallTags = useCallback((tags: Tag[]): void => {
        if (selectedCallRecord) {
            setSelectedCallRecord({
                ...selectedCallRecord,
                tags: tags
            });
            setCalls((prevCalls: CallRecord[]): CallRecord[] =>
                prevCalls.map((call: CallRecord): CallRecord =>
                    call.id === selectedCallRecord.id ? {...call, tags: tags} : call
                )
            );
        }
    }, [selectedCallRecord]);

    return (
        <CallRecordsContext.Provider value={{
            selectedCallRecord,
            addSelectedCallTask,
            setSelectedCallRecord,
            calls,
            addCall,
            editSelectedCallTags,
            editSelectedCallTasks
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