import {Grid} from "@mui/material";
import type {JSX} from "react";
import CallsContainer from "../../components/callsContainer/CallsContainer.tsx";
import CallInfoContainer from "../../components/callInfoContainer/CallInfoContainer.tsx";
import {CallRecordsProvider} from "../../contexts/callRecordsContext.tsx";

function UserPage(): JSX.Element {
    return (
      <CallRecordsProvider>
        <Grid container size={12} justifyContent={'center'} rowSpacing={8} columnSpacing={2} width={"100%"} height={"100%"}>
                <Grid size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}} height={'100%'}>
                    <CallsContainer/>
                </Grid>
                <Grid size={{xs: 12, sm: 12, md: 8, lg: 8, xl: 8}} height={'100%'}>
                    <CallInfoContainer/>
                </Grid>
        </Grid>
      </CallRecordsProvider>
    )
}

export default UserPage;

