import {Box, Typography} from "@mui/material";
import type {CallRecord} from "../../../models/callRecord.ts";
import {useCallRecords} from "../../../contexts/callRecordsContext.tsx";


export default function CallsBody() {
    const {selectedCallRecord, setSelectedCallRecord, calls} = useCallRecords();

    return (
        <Box display={"flex"} flexDirection={"column"} gap={1}>
            {
                calls.map((call: CallRecord) => {
                    return (
                        <Box sx={{'&:hover': { boxShadow: 5}, transition: 'all 0.3s'}}
                             border={call.id === selectedCallRecord?.id ? 'grey 1px solid' : ''}
                             key={call.id}
                             bgcolor={'background.default'}
                             borderRadius={2}
                             p={2}
                             boxShadow={2}
                             onClick={(): void => setSelectedCallRecord(call)}
                        >
                            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                                <Typography variant={'h6'}>
                                    {call.name}
                                </Typography>
                                <Typography variant={'body1'}>
                                    {new Date(call.createdAt).toLocaleDateString()}
                                </Typography>
                            </Box>
                            <Typography variant={'body1'} mt={1}>
                                Last updated: {new Date(call.updatedAt).toLocaleDateString()}
                            </Typography>
                        </Box>
                    );
                })
            }
        </Box>
    );
}