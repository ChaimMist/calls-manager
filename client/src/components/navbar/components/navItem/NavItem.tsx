import type {NavItemProps} from "./navItemProps.ts";
import {Box, Typography} from "@mui/material";
import {NavLink} from "react-router";
import type {ReactNode} from "react";
import {useLocation} from "react-router";


function NavItem({label, path}: NavItemProps): ReactNode {
    const location = useLocation();
    const isSelected: boolean = location.pathname === path;

    return (
        <NavLink to={path} style={{textDecoration: 'none'}} >
            <Box sx={{
                padding: 1,
                borderRadius: 1,
                color: 'text.primary',
                borderBottom: isSelected ? '2px solid black' : 'none',
                '&:hover': {
                    borderBottom: '2px solid black',
                }
            }}>
                <Typography variant={'h6'} >
                    {label}
                </Typography>
            </Box>
        </NavLink>
    );
}

export default NavItem;