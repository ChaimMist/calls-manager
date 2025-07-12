import type {Tag} from "../../models/tag.ts";
import {Box, Chip} from "@mui/material";
import CustomPopover from "../CustomPopover/CustomPopover.tsx";
import AddIcon from "@mui/icons-material/Add";
import TagsPopup from "../tagsPopup/TagsPopup.tsx";
import type {TagsDisplayProps} from "./tagsDisplayProps.ts";
import { useTagsContext } from '../../contexts/tagsContext.tsx';

export default function TagsDisplay({displayedTags, onSaveTags, isEditable}: TagsDisplayProps) {
    const {tags} = useTagsContext()

    return (
        <Box display={'flex'} flexDirection={'row'} gap={1} flexWrap={'wrap'} alignItems={'center'}>
            {tags.map((tag: Tag) => {
                if (displayedTags.some((displayedTag: Tag) => displayedTag.id === tag.id)) {
                    return (
                        <Chip key={tag.id} variant={'outlined'} color={'primary'} label={tag.name}/>
                    )
                }
            })}
            {isEditable && (
                <CustomPopover id={'tagsDisplayEditPopup'} icon={<AddIcon/>}>
                    <TagsPopup onSaveTags={onSaveTags} selectedTags={displayedTags}/>
                </CustomPopover>
            )}
        </Box>
    )
}