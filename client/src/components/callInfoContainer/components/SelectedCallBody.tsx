import { useCallRecords } from '../../../contexts/callRecordsContext.tsx';
import { Grid } from '@mui/material';
import CallRecordSuggestedTasks from '../../callRecordSuggestedTasks/CallRecordSuggestedTasks.tsx';
import CallRecordTasks from '../../callRecordTasks/CallRecordTasks.tsx';

export default function SelectedCallBody() {
  const { selectedCallRecord } = useCallRecords();

  if (!selectedCallRecord) {
    return (
      <></>
    );
  }

  return (
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid size={{xs:12, md:12, lg:6}} justifyContent={'start'} spacing={2}>
          <CallRecordTasks />
        </Grid>
        <Grid size={{xs: 12, sm:12, md:12, lg:6}}>
          <CallRecordSuggestedTasks />
        </Grid>
      </Grid>
  );
}