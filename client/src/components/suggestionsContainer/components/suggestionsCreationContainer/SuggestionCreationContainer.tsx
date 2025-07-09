import {Box, Button, Chip, FormControl, TextField} from "@mui/material";
import React, {type JSX, useCallback} from "react";
import {toast} from "react-toastify";
import AddIcon from '@mui/icons-material/Add';
import type {Tag} from "../../../../models/tag.ts";
import CustomPopover from "../../../CustomPopover/CustomPopover.tsx";
import TagsPopup from "../../../tagsPopup/TagsPopup.tsx";

export default function SuggestionCreationContainer(): JSX.Element {
    const tags: Tag[] = [
        {
            id: '6',
            name: 'urgent',
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },
        {
            id: '7',
            name: 'feature',
            createdAt: '2023-10-02T12:00:00Z',
            updatedAt: '2023-10-02T12:00:00Z'
        }

    ]
    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const taskName: string = new FormData(event.currentTarget).get('taskName') as string;
        if (!taskName || taskName.trim() === '') {
            toast.error('Task name is required');
        }
    }, []);

    const handleSaveTags = useCallback((selectedTags: Tag[]): void => {
        if (selectedTags.length === 0) {
            toast.error('Please select at least one tag');
            return;
        }
        console.log('Selected Tags:', selectedTags);
        toast.success('Tags saved successfully');
    }, []);

    return (
        <Box display={'flex'} flexDirection={'column'} borderRadius={3} gap={2} bgcolor={'background.paper'} p={2}>
            <FormControl component={'form'} onSubmit={handleSubmit}>
                <Box display={'flex'} flexDirection={'row'} gap={2}>
                    <TextField required name={'taskName'} placeholder={'Task name'} label={"Task name"}
                               variant={"outlined"} fullWidth/>
                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Create
                    </Button>
                </Box>
            </FormControl>
            <Box display={'flex'} flexDirection={'row'} gap={1} flexWrap={'wrap'} alignItems={'center'}>
                {tags.map((tag: Tag, index: number) => (
                    <Chip key={index} variant={'outlined'} color={'primary'} label={tag.name}/>
                ))}
                <CustomPopover id={'suggestionCreationEditPopup'} icon={<AddIcon/>}>
                    <TagsPopup onSaveTags={handleSaveTags} selectedTags={tags}/>
                </CustomPopover>
            </Box>
        </Box>
    );
}
