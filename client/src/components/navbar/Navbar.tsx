import {Box, Typography} from "@mui/material";
import NavItem from "./components/navItem/NavItem.tsx";
import type {JSX} from "react";

function Navbar(): JSX.Element {
    return (
        <Box bgcolor={'#c1d3fe'} p={2} px={4} boxShadow={3} height={60} display={'flex'} alignItems={'center'} gap={3}>
            <Typography variant={'h5'} fontWeight={'bold'} fontStyle={'italic'}>
                Calls Manager
            </Typography>
            <Box display={'flex'} gap={1} flexGrow={1}>
                <NavItem label={'Admin'} path={'/admin'}></NavItem>
                <NavItem label={'User'} path={'/user'}></NavItem>
            </Box>
        </Box>
    )
}

export default Navbar;