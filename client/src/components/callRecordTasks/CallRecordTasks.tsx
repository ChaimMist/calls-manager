import type { Task } from '../../models/task.ts';
import TaskItem from '../taskItem/TaskItem.tsx';
import { useCallRecords } from '../../contexts/callRecordsContext.tsx';
import { Box, Typography } from '@mui/material';
import DialogButton from '../dialogButton/DialogButton.tsx';

export default function CallRecordTasks() {
  const { selectedCallRecord, createCallTask } = useCallRecords();

  const handleSaveTask = (event: React.FormEvent<HTMLFormElement>): void => {
    const formData = new FormData(event.currentTarget);
    const taskName = formData.get('dialogInput') as string;

    if (!selectedCallRecord) return;
    createCallTask({
      name: taskName,
      status: 'Open',
      callId: selectedCallRecord.id,
    });
  };

  return (
    <Box p={2} display={'flex'} flexDirection={'column'} gap={2}>
      <Box p={2} borderRadius={2} boxShadow={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}
           gap={1}>
        <Typography variant={'h5'}>
          Tasks
        </Typography>
        <DialogButton dialogTitle={'New task'}
                      dialogDescription={'Create a new task for this call.'}
                      buttonText={'New Task'}
                      onSave={handleSaveTask} />
      </Box>
      {selectedCallRecord?.tasks.map((task: Task) => (<TaskItem key={task.id} task={task} />))}
    </Box>
  );
}