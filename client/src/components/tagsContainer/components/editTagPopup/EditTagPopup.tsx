import {Box, Button, FormControl, TextField, Typography} from "@mui/material";
import React, {type JSX, useCallback} from "react";
import {toast} from "react-toastify";
import type {EditTagPopupProps} from "./editTagPopupProps.ts";
import { useDeleteTag, useUpdateTag } from '../../../../hooks/mutationHooks/useTagsMutations.ts';
import type { Tag } from '../../../../models/tag.ts';

export default function EditTagPopup({tag}: EditTagPopupProps): JSX.Element {
    const {mutateAsync: updateTag} = useUpdateTag();
    const {mutateAsync: deleteTag} = useDeleteTag();

    const handleRenameTag = useCallback((event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const newName = new FormData(event.currentTarget).get('tagName') as string;
        if (!newName || newName.trim() === '') {
            toast.error('Tag name cannot be empty');
        } else {
            event.currentTarget.reset();
            const updatedTag: Partial<Tag> = {
                id: tag.id,
                name: newName
            }
            updateTag(updatedTag);
        }
    }, [tag, updateTag]);

    const handleDeleteTag = (): void => {
        deleteTag(tag.id);
    };

    return (
        <Box bgcolor={'background.paper'}
             boxShadow={5}
             display={'flex'}
             flexDirection={'column'}
             gap={2}
             borderRadius={3}
             width={350}
             height={200}
             p={2}>
            <Typography variant={'h6'}>Edit Tag: {tag.name}</Typography>
            <FormControl component={'form'} onSubmit={handleRenameTag}>
                <Box display={'flex'} flexDirection={'row'} gap={1}>
                    <TextField label={"Tag Name"}
                               name={'tagName'}
                               variant={"outlined"}
                               fullWidth
                               required>
                    </TextField>
                    <Button type={'submit'} variant={"contained"} color={'primary'}>
                        Rename
                    </Button>
                </Box>
            </FormControl>
            <Button onClick={handleDeleteTag} variant={'contained'} color={'error'}>DELETE</Button>
        </Box>
    );
}