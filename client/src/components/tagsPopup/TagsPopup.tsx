import {Box, Button, FormControl, Typography} from "@mui/material";
import type {TagsPopupProps} from "./tagsPopupProps.ts";
import {useState} from "react";
import TagPopupItem from "./components/TagPopupItem.tsx";
import type {Tag} from "../../models/tag.ts";


export default function TagsPopup({onSaveTags, selectedTags}: TagsPopupProps) {
    const [newTags, setNewTags] = useState<Set<string>>(new Set(selectedTags.map((tag:Tag)=> tag.id)));

    const allTags: Tag[] = [
        {id: '1', name: 'Tag1'},
        {id: '2', name: 'Tag2'},
        {id: '3', name: 'Tag3'},
        {id: '4', name: 'Tag4'},
        {id: '5', name: 'Tag5'},
        {
            id: '7',
            name: 'urgent',
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },
        {
            id: '6',
            name: 'feature',
            createdAt: '2023-10-02T12:00:00Z',
            updatedAt: '2023-10-02T12:00:00Z'
        }
    ]

    const handleCheckboxChange = (tagId: string) => {
        console.log('Checkbox changed for tag:', tagId);
        setNewTags(prev => {
            const newSet = new Set(prev);
            if (newSet.has(tagId)) {
                newSet.delete(tagId);
            } else {
                newSet.add(tagId);
            }
            return newSet;
        });
    };


    const handleSelectTags = (e: React.FormEvent) => {
        e.preventDefault();
        const selectedTagsArray: Tag[] = allTags.filter(tag => newTags.has(tag.id));
        if (selectedTagsArray.length === 0) {
            return;
        }
        console.log('Selected Tags:', selectedTagsArray);
        onSaveTags(selectedTagsArray);
    };

    const isSelectedTag = (tag: Tag): boolean => {
        return !!newTags?.has(tag.id);
    };

    return (
        <Box bgcolor={'background.paper'}
             boxShadow={5}
             display={'flex'}
             flexDirection={'column'}
             gap={2}
             borderRadius={3}
             width={300}
             overflow={'auto'}
             height={300}
             p={2}>
            <FormControl component={'form'} onSubmit={handleSelectTags}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant={'h6'}>Select Tags</Typography>
                <Button type={'submit'} variant={'contained'} size={'small'}
                        color={'primary'}>Save</Button>
            </Box>
                {allTags.map((tag: Tag) => (
                    <TagPopupItem
                        key={tag.id}
                        tag={tag}
                        isSelected={isSelectedTag(tag)}
                        onChange={() => handleCheckboxChange(tag.id)}
                    />
                ))}
            </FormControl>
        </Box>
    );
}