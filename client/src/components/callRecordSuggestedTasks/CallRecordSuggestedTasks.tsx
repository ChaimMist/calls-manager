import { Box, Typography } from '@mui/material';
import { useCallRecords } from '../../contexts/callRecordsContext.tsx';
import type { SuggestedTask } from '../../models/suggestedTask.ts';
import AssignableSuggestedTask from '../assignableSuggestedTask/AssignableSuggestedTask.tsx';
import type { Task } from '../../models/task.ts';


export default function CallRecordSuggestedTasks() {
  const { selectedCallRecordSuggestedTasks, selectedCallTasks } = useCallRecords();

  const isTaskAssigned = (suggestedTask: SuggestedTask): boolean => {
    return selectedCallTasks.some((task: Task): boolean => task.originSuggestedTaskId === suggestedTask.id);
  }

  return (
    <Box p={2} display={'flex'} flexDirection={'column'} gap={2}>
      <Box p={2} borderRadius={2} boxShadow={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}
           gap={1}>
        <Typography variant={'h5'}>
          Suggested Tasks
        </Typography>
      </Box>
      {selectedCallRecordSuggestedTasks?.map((suggestedTask: SuggestedTask) => (
        <AssignableSuggestedTask key={suggestedTask.id} isAssigned={isTaskAssigned(suggestedTask)} suggestedTask={suggestedTask} />))}
    </Box>
  );
}