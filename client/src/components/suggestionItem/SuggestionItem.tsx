import {Box, Chip, Typography} from "@mui/material";
import type {Tag} from "../../models/tag.ts";
import CustomPopover from "../CustomPopover/CustomPopover.tsx";
import EditIcon from "@mui/icons-material/Edit";
import EditSuggestionPopup from "../suggestionsContainer/components/editSuggestionPopup/EditSuggestionPopup.tsx";
import type {SuggestionItemProps} from "./suggestionItemProps.ts";

export default function SuggestionItem({suggestion}: SuggestionItemProps) {
    return (
        <Box display={'flex'} justifyContent={'space-between'} borderRadius={3} bgcolor={'background.paper'} p={2} boxShadow={2}>
            <Typography sx={{wordBreak: 'break-all'}} variant={'body1'}>{suggestion.name}</Typography>
            <Box display={'flex'} flexDirection={'row'} gap={1} flexWrap={'wrap'} alignItems={'center'}>
                {suggestion.tags.map((tag: Tag, index: number) => (
                    <Chip key={index} variant={'outlined'} color={'primary'} label={tag.name}/>
                ))}
                <CustomPopover id={suggestion.id} icon={<EditIcon/>}>
                    <EditSuggestionPopup suggestion={suggestion}/>
                </CustomPopover>
            </Box>
        </Box>
    )
}