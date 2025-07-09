import type {JSX} from "react";
import {Box, Typography} from "@mui/material";
import TagCreationContainer from "./components/tagCreationContainer/TagCreationContainer.tsx";
import TagsBody from "./components/tagsBody/TagsBody.tsx";

export default function TagsContainer(): JSX.Element {
    return (
        <Box height={'100%'} overflow={'auto'} display="flex" flexDirection="column" gap={1} p={2}>
            <Box display={'flex'} flexDirection={'column'} gap={1}>
                <Typography variant="h5" component="div">
                    Tags
                </Typography>
                <TagCreationContainer/>
            </Box>
            <TagsBody/>
        </Box>
    );
}