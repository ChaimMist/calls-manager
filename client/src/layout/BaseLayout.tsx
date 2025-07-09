import Navbar from "../components/navbar/Navbar.tsx";
import {Outlet} from "react-router";
import type {JSX} from "react";
import {Box} from "@mui/material";


function BaseLayout(): JSX.Element {
    return (
        <Box display={'flex'} flexDirection={'column'} gap={1}>
            <Navbar/>
            <Outlet/>
        </Box>
    );
}

export default BaseLayout