import type {EditSuggestionPopupProps} from "./editSuggestionPopupProps.ts";
import {Box, Button, FormControl, TextField, Typography} from "@mui/material";
import React, {useCallback} from "react";
import {toast} from "react-toastify";
import {
    useDeleteSuggestedTask,
    useUpdateSuggestedTask,
} from '../../../../hooks/mutationHooks/useSuggestedTasksMutations.ts';

export default function EditSuggestionPopup({suggestion}: EditSuggestionPopupProps) {
    const {mutateAsync: updateSuggestedTask} = useUpdateSuggestedTask();
    const {mutateAsync: deleteSuggestedTask} = useDeleteSuggestedTask();

    const handleRenameSuggestion = useCallback((event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const newName = new FormData(event.currentTarget).get('suggestionName') as string;
        if (!newName || newName.trim() === '') {
            toast.error('Suggestion name cannot be empty');
        } else {
            event.currentTarget.reset();
            updateSuggestedTask({
                id: suggestion.id,
                name: newName
            })
        }
    }, [suggestion.id, updateSuggestedTask]);

    const handleDeleteSuggestion = (): void => {
        deleteSuggestedTask(suggestion.id)
    };

    return (
        <Box bgcolor={'background.paper'}
             boxShadow={5}
             display={'flex'}
             flexDirection={'column'}
             gap={2}
             width={350}
             height={200}
             p={2}>
            <Typography variant={'h6'}>Edit suggestion: {suggestion.name}</Typography>
            <FormControl component={'form'} onSubmit={handleRenameSuggestion}>
                <Box display={'flex'} flexDirection={'row'} gap={1}>
                    <TextField label={"suggestion Name"}
                               name={'suggestionName'}
                               variant={"outlined"}
                               fullWidth
                               required>
                    </TextField>
                    <Button type={'submit'} variant={"contained"} color={'primary'}>
                        Rename
                    </Button>
                </Box>
            </FormControl>
            <Button onClick={handleDeleteSuggestion} variant={'contained'} color={'error'}>DELETE</Button>
        </Box>
    );
}