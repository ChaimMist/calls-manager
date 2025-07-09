import type {SuggestionI} from "../../models/suggestion.ts";
import {Box, Chip, Typography} from "@mui/material";
import type {Tag} from "../../models/tag.ts";


export default function SuggestionItem({name, tags}: SuggestionI) {
    return (
        <Box display={'flex'} justifyContent={'space-between'} borderRadius={3} bgcolor={'background.paper'} p={2} boxShadow={2}>
            <Typography sx={{wordBreak: 'break-all'}} variant={'body1'}>{name}</Typography>
            <Box display={'flex'} flexDirection={'row'} gap={1} flexWrap={'wrap'}>
                {tags.map((tag: Tag, index: number) => (
                    <Chip key={index} variant={'outlined'} color={'primary'} label={tag.name}/>
                ))}
            </Box>
        </Box>
    )
}