import {Grid} from "@mui/material";
import type {JSX} from "react";
import CallsContainer from "../../components/callsContainer/CallsContainer.tsx";
import CallInfoContainer from "../../components/callInfoContainer/CallInfoContainer.tsx";
import {CallRecordsProvider} from "../../contexts/callRecordsContext.tsx";

function UserPage(): JSX.Element {
    return (
        <Grid container size={12} justifyContent="center" alignItems="stretch" spacing={2} width={"100%"}
              height={"750px"}>
            <CallRecordsProvider>
                <Grid size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}} height={'100%'}>
                    <CallsContainer/>
                </Grid>
                <Grid size={{xs: 12, sm: 12, md: 8, lg: 8, xl: 8}} height={'100%'}>
                    <CallInfoContainer/>
                </Grid>
            </CallRecordsProvider>
        </Grid>
    )
}

export default UserPage;

