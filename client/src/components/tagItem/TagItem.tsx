import {type JSX} from "react";
import {Box,Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import EditTagPopup from "../tagsContainer/components/editTagPopup/EditTagPopup.tsx";
import type {TagItemProps} from "./tagItemProps.ts";
import CustomPopover from "../CustomPopover/CustomPopover.tsx";

export default function TagItem({tag}: TagItemProps): JSX.Element {

    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} borderRadius={3} bgcolor={'background.paper'} p={2}
             boxShadow={2}>
            <Typography variant={'body1'}>{tag.name}</Typography>
            <CustomPopover id={tag.id} icon={<EditIcon/>}>
                <EditTagPopup tag={tag}/>
            </CustomPopover>
        </Box>
    )
}