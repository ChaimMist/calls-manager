import {Box, Typography} from "@mui/material";
import DialogButton from "../../dialogButton/DialogButton.tsx";
import {toast} from "react-toastify";
import {useCallRecords} from "../../../contexts/callRecordsContext.tsx";

export default function CallsHeader() {
    const {addCall} = useCallRecords();

    const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
        const callName: string = new FormData(event.currentTarget).get('dialogInput') as string;
        if (!callName || callName.trim() === '') {
            toast.error('Call name is required');
            return;
        } else {
            toast.success(`Call "${callName}" created successfully`);
            addCall({
                id: new Date().getTime().toString(),
                name: callName,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                tasks: [],
                tags: []
            });
        }
    };

    return (
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant={'h5'}>
                Calls
            </Typography>
            <DialogButton dialogDescription={'Please enter a relevant call name'} onSave={handleSave}
                          dialogTitle={'New Call'} buttonText={'New Call'}/>
        </Box>
    )
}