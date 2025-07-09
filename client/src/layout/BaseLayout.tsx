import Navbar from "../components/navbar/Navbar.tsx";
import {Outlet} from "react-router";
import type {ReactNode} from "react";
import {Box} from "@mui/material";


function BaseLayout(): ReactNode {
    return (
        <Box display={'flex'} flexDirection={'column'} gap={1}>
            <Navbar/>
            <Outlet/>
        </Box>
    );
}

export default BaseLayout