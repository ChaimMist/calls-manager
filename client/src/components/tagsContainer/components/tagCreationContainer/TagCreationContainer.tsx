import {Box, Button, FormControl, TextField} from "@mui/material";
import {toast} from "react-toastify";

export default function TagCreationContainer() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const tagName: string = new FormData(event.currentTarget).get('taskName') as string;
        if (!tagName || tagName.trim() === '') {
            toast.error('Tag name is required');
            return;
        }
        console.log(`Creating tag with name: ${tagName}`);
    };

    return (
        <Box display={'flex'} flexDirection={'column'} borderRadius={3} gap={2} bgcolor={'background.paper'} p={2}>
            <FormControl component={'form'} onSubmit={handleSubmit}>
                <Box display={'flex'} flexDirection={'row'} gap={2}>
                    <TextField required name={'tagName'} placeholder={'Tag name'} label={"Tag name"}
                               variant={"outlined"} fullWidth/>
                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Create
                    </Button>
                </Box>
            </FormControl>
        </Box>
    )
}