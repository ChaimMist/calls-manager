import {Box} from "@mui/material";
import CallsBody from "./callsBody/CallsBody.tsx";
import CallsHeader from "./callsHeader/CallsHeader.tsx";

export default function CallsContainer() {

    return (
        <Box bgcolor={'background.paper'}  boxShadow={2} borderRadius={3} height={'100%'} overflow={'auto'} display="flex"
             flexDirection="column" flexGrow={1} gap={1} p={2}>
            <CallsHeader/>
            <CallsBody/>
        </Box>
    );
}
