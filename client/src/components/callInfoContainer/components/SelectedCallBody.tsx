import {useCallRecords} from "../../../contexts/callRecordsContext.tsx";
import {Box, Typography} from "@mui/material";
import DialogButton from "../../dialogButton/DialogButton.tsx";
import TaskItem from "../../taskItem/TaskItem.tsx";
import type {Task} from "../../../models/task.ts";

export default function SelectedCallBody() {
    const {selectedCallRecord, addSelectedCallTask} = useCallRecords();

    const handleSaveTask = (event: React.FormEvent<HTMLFormElement>): void => {
        const formData = new FormData(event.currentTarget);
        const taskName = formData.get('dialogInput') as string;

        if (!selectedCallRecord) return;
        addSelectedCallTask({
            id: new Date().getTime().toString(),
            name: taskName,
            status: 'Open',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            callId: selectedCallRecord.id
        });
    }

    if (!selectedCallRecord) {
        return (
            <></>
        );
    }

    return (
        <Box p={2} display={'flex'} flexDirection={'column'} gap={2}>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} gap={1}>
                <Typography variant={'h5'}>
                    Tasks
                </Typography>
                <DialogButton dialogTitle={'New task'}
                              dialogDescription={'Create a new task for this call.'}
                              buttonText={'New Task'}
                              onSave={handleSaveTask}/>
            </Box>
            {
                selectedCallRecord?.tasks.map((task: Task) => <TaskItem key={task.id} task={task}/>)
            }
        </Box>
    );
}