import {Box, IconButton, Popover} from "@mui/material";
import type {CustomPopoverProps} from "./customPopoverProps.ts";
import React, {useState} from "react";

export default function CustomPopover({children, id, icon}: CustomPopoverProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton id={id} onClick={handleClick} sx={{position: 'relative'}}>
                {icon}
            </IconButton>
            <Popover transformOrigin={{vertical: 'top', horizontal: 'center'}}
                     anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                     anchorEl={anchorEl}
                     onClose={handleClose}
                     open={!!anchorEl}>
                {children}
            </Popover>
        </Box>
    );
}