import {Box, Button, FormControl, TextField} from "@mui/material";
import {toast} from "react-toastify";
import { useCreateTag } from '../../../../hooks/mutationHooks/useTagsMutations.ts';

export default function TagCreationContainer() {
    const {mutateAsync: createTag, isPending} = useCreateTag();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const tagName: string = new FormData(event.currentTarget).get('tagName') as string;
        if (!tagName || tagName.trim() === '') {
            toast.error('Tag name is required');
            return;
        } else {
            createTag({name: tagName});
        }
    };

    return (
        <Box display={'flex'} boxShadow={2} flexDirection={'column'} borderRadius={3} gap={2} bgcolor={'background.paper'} p={2}>
            <FormControl component={'form'} onSubmit={handleSubmit}>
                <Box display={'flex'} flexDirection={'row'} gap={2}>
                    <TextField required name={'tagName'} placeholder={'Tag name'} label={"Tag name"}
                               variant={"outlined"} fullWidth/>
                    <Button loading={isPending} type={'submit'} variant={'contained'} color={'primary'}>
                        Create
                    </Button>
                </Box>
            </FormControl>
        </Box>
    )
}