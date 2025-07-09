import {Grid} from "@mui/material";
import {type JSX} from "react";
import SuggestionsContainer from "../../components/suggestionsContainer/SuggestionsContainer";
import TagsContainer from "../../components/tagsContainer/TagsContainer";

function AdminPage(): JSX.Element{
    return (
        <Grid container size={12} justifyContent="center" alignItems="stretch" spacing={2} width={"100%"} style={{ height: 750 }}>
            <Grid size={{xs: 12, sm: 12, md: 4}} height={'100%'} >
                <TagsContainer/>
            </Grid>
            <Grid size={{xs: 12, sm: 12, md: 8, lg: 8}} height={'100%'} >
                <SuggestionsContainer/>
            </Grid>
        </Grid>
    )
}

export default AdminPage;