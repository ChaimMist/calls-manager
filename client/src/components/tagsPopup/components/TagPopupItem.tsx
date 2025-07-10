import {Box, Checkbox, FormControlLabel} from "@mui/material";
import type {TagPopupItemProps} from "./tagPopupItemProps.ts";

export default function TagPopupItem({tag, isSelected, onChange}: TagPopupItemProps) {


    return (
        <Box display="flex" justifyContent="space-between" borderRadius={2}>
            <FormControlLabel
                control={<Checkbox checked={isSelected} onChange={onChange} value={tag}/>}
                label={tag.name}
            />
        </Box>
    );
}