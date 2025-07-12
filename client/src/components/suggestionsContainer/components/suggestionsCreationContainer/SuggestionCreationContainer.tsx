import {Box, Button, FormControl, TextField} from "@mui/material";
import {type JSX, useCallback, useState} from "react";
import {toast} from "react-toastify";
import type {Tag} from "../../../../models/tag.ts";
import TagsDisplay from "../../../tagsDisplay/TagsDisplay.tsx";
import { useCreateSuggestedTask } from '../../../../hooks/mutationHooks/useSuggestedTasksMutations.ts';
import type { SuggestedTaskDto } from '../../../../models/suggestedTask.ts';

export default function SuggestionCreationContainer(): JSX.Element {
    const [displayedTags, setDisplayedTags] = useState<Tag[]>([]);
    const {mutateAsync: createSuggestedTask} = useCreateSuggestedTask();

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const taskName: string = new FormData(event.currentTarget).get('taskName') as string;
        if (!taskName || taskName.trim() === '') {
            toast.error('Task name is required');
        }
        const tagIds: string[] = displayedTags.map((tag: Tag): string => tag.id);
        const taskDto: SuggestedTaskDto = {
            name: taskName,
            tagIds
        }
        createSuggestedTask(taskDto);
    }, [createSuggestedTask, displayedTags]);

    const handleSaveTags = useCallback((selectedTags: Tag[]): void => {
        if (selectedTags.length === 0) {
            toast.error('Please select at least one tag');
            return;
        }
        setDisplayedTags(selectedTags);
        toast.success('Tags saved successfully');
    }, []);

    return (
        <Box boxShadow={2} display={'flex'} flexDirection={'column'} borderRadius={3} gap={2} bgcolor={'background.paper'} p={2}>
            <FormControl component={'form'} onSubmit={handleSubmit}>
                <Box display={'flex'} flexDirection={'row'} gap={2}>
                    <TextField required name={'taskName'} placeholder={'Task name'} label={"Task name"}
                               variant={"outlined"} fullWidth/>
                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Create
                    </Button>
                </Box>
            </FormControl>
            <TagsDisplay displayedTags={displayedTags} onSaveTags={handleSaveTags} isEditable={true}/>
        </Box>
    );
}
