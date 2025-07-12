import {Box, Checkbox, FormControlLabel} from "@mui/material";
import type {TagPopupItemProps} from "./tagPopupItemProps.ts";
import { memo } from 'react';

export const TagPopupItem= memo(({tag, isSelected, onChange}: TagPopupItemProps) => {
    return (
        <Box display="flex" justifyContent="space-between" borderRadius={2}>
            <FormControlLabel
                control={<Checkbox checked={isSelected} onChange={onChange} value={tag}/>}
                label={tag.name}
            />
        </Box>
    );
}, (prevProps, nextProps) => {
  return prevProps.isSelected === nextProps.isSelected && prevProps.tag.id === nextProps.tag.id;
});


export default TagPopupItem;