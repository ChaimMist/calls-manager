import {Box, Typography} from "@mui/material";
import DialogButton from "../../dialogButton/DialogButton.tsx";
import {toast} from "react-toastify";
import {useCallRecords} from "../../../contexts/callRecordsContext.tsx";

export default function CallsHeader() {
    const {createCall, createCallPending} = useCallRecords();

    const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
        const callName: string = new FormData(event.currentTarget).get('dialogInput') as string;
        if (!callName || callName.trim() === '') {
            toast.error('Call name is required');
            return;
        } else {
            createCall({
                name: callName
            });
        }
    };

    return (
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant={'h5'}>
                Calls
            </Typography>
            <DialogButton isLoading={createCallPending} dialogDescription={'Please enter a relevant call name'} onSave={handleSave}
                          dialogTitle={'New Call'} buttonText={'New Call'}/>
        </Box>
    )
}