import Navbar from "../components/navbar/Navbar.tsx";
import {Outlet} from "react-router";
import type {JSX} from "react";
import {Box} from "@mui/material";
import { ToastContainer } from 'react-toastify';


function BaseLayout(): JSX.Element {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover/>
            <Box display={'flex'} flexDirection={'column'} gap={1} width={'100%'} height={'100dvh'}>
                <Navbar/>
                <Box p={2} height={'calc(100dvh - 180px)'}>
                    <Outlet/>
                </Box>
            </Box>
        </>

    );
}

export default BaseLayout