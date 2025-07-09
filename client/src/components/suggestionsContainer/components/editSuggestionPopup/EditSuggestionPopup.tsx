import type {EditSuggestionPopupProps} from "./editSuggestionPopupProps.ts";
import {Box, Button, FormControl, TextField, Typography} from "@mui/material";
import React, {useCallback} from "react";

export default function EditSuggestionPopup({suggestion}: EditSuggestionPopupProps) {

    const handleRenameSuggestion = useCallback((event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const newName = new FormData(event.currentTarget).get('suggestionName') as string;
        console.log(`Renaming suggestion from ${suggestion.name} to: ${newName}`);
        if (!newName || newName.trim() === '') {
            alert('Suggestion name cannot be empty');
        } else {
            event.currentTarget.reset();
            console.log(`Renaming suggestion from ${suggestion.name} to: ${newName}`);
        }
    }, [suggestion.name]);

    const handleDeleteSuggestion = useCallback((): void => {
        console.log(`Deleting suggestion: ${suggestion.name}`);
        alert(`Suggestion ${suggestion.name} deleted successfully`);
    }, [suggestion.name]);

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