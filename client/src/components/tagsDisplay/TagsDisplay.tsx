import type {Tag} from "../../models/tag.ts";
import {Box, Chip} from "@mui/material";
import CustomPopover from "../CustomPopover/CustomPopover.tsx";
import AddIcon from "@mui/icons-material/Add";
import TagsPopup from "../tagsPopup/TagsPopup.tsx";
import type {TagsDisplayProps} from "./tagsDisplayProps.ts";


export default function TagsDisplay({tags, onSaveTags, isEditable}: TagsDisplayProps) {
    return (
        <Box display={'flex'} flexDirection={'row'} gap={1} flexWrap={'wrap'} alignItems={'center'}>
            {tags.map((tag: Tag) => (
                <Chip key={tag.id} variant={'outlined'} color={'primary'} label={tag.name}/>
            ))}
            {isEditable && (
                <CustomPopover id={'tagsDisplayEditPopup'} icon={<AddIcon/>}>
                    <TagsPopup onSaveTags={onSaveTags} selectedTags={tags}/>
                </CustomPopover>
            )}
        </Box>
    )
}