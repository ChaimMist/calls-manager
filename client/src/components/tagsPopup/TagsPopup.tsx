import {Box, Button, FormControl, Typography} from "@mui/material";
import type {TagsPopupProps} from "./tagsPopupProps.ts";
import { useCallback, useState } from 'react';
import TagPopupItem from "./components/TagPopupItem.tsx";
import type {Tag} from "../../models/tag.ts";
import { useTagsContext } from '../../contexts/tagsContext.tsx';


export default function TagsPopup({onSaveTags, selectedTags}: TagsPopupProps) {
    const [newTags, setNewTags] = useState<Set<string>>(new Set(selectedTags.map((tag:Tag)=> tag.id)));
    const {tags} = useTagsContext()

    const handleCheckboxChange = useCallback((tagId: string) => {
        setNewTags(prev => {
            const newSet = new Set(prev);
            if (newSet.has(tagId)) {
                newSet.delete(tagId);
            } else {
                newSet.add(tagId);
            }
            return newSet;
        });
    }, []);


    const handleSelectTags = (e: React.FormEvent) => {
        e.preventDefault();
        const selectedTagsArray: Tag[] = tags.filter(tag => newTags.has(tag.id));
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
             overflow={'hidden'}
             borderRadius={3}
             width={300}
             height={300}
             p={2}>
            <FormControl component={'form'} onSubmit={handleSelectTags}>
            <Box display={'flex'}  justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant={'h6'}>Select Tags</Typography>
                <Button type={'submit'} variant={'contained'} size={'small'}
                        color={'primary'}>Save</Button>
            </Box>
                <Box overflow={'auto'} height={'280px'}>
                {tags.map((tag: Tag) => (
                    <TagPopupItem
                        key={tag.id}
                        tag={tag}
                        isSelected={isSelectedTag(tag)}
                        onChange={()=> handleCheckboxChange(tag.id)}
                    />
                ))}
                </Box>
            </FormControl>
        </Box>
    );
}