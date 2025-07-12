import type { AssignableSuggestedTaskProps } from './assignableSuggestedTaskProps.ts';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useCallRecords } from '../../contexts/callRecordsContext.tsx';
import type { TaskDto } from '../../models/task.ts';

export default function AssignableSuggestedTask({ suggestedTask, isAssigned = false }: AssignableSuggestedTaskProps) {

  const {createCallTask, selectedCallRecord} = useCallRecords();

  const handleAssignTask = (): void => {
    if (!selectedCallRecord) {
      return;
    }
    const newTask: TaskDto = {
      name: suggestedTask.name,
      originSuggestedTaskId: suggestedTask.id,
      callId: selectedCallRecord.id,
    };
    createCallTask(newTask);
  }

  return (
    <Box p={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderRadius={3} bgcolor={'background.paper'}
         boxShadow={2}>
      <Typography variant={'h6'}>
        {suggestedTask.name}
      </Typography>
      {
        isAssigned ?
          <Typography color={'success'} fontStyle={'italic'}>Assigned</Typography> :
          <IconButton onClick={handleAssignTask}>
              <AddIcon/>
          </IconButton>
      }
    </Box>
  );
}