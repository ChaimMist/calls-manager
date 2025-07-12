import {Box} from "@mui/material";
import SelectedCallBody from "./components/SelectedCallBody.tsx";
import SelectedCallHeader from "./components/SelectedCallHeader.tsx";

export default function CallInfoContainer() {

    return (
        <Box bgcolor={'background.paper'} boxShadow={2} borderRadius={3} height={'100%'} overflow={'auto'} display="flex" flexDirection="column" flexGrow={1} gap={1} p={2}>
            <SelectedCallHeader/>
            <SelectedCallBody/>
        </Box>
    );
}