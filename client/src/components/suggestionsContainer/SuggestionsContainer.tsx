import {Box, Typography} from "@mui/material";
import SuggestionCreationContainer from "./components/suggestionsCreationContainer/SuggestionCreationContainer.tsx";
import SuggestionsBody from "./components/suggestionsBody/SuggestionsBody.tsx";

export default function SuggestionsContainer() {
    return (
        <Box height={'100%'} overflow={'auto'} display="flex" flexDirection="column" flexGrow={1} gap={1} p={2}>
            <Typography variant="h5" component="div">
                Suggested tasks
            </Typography>
            <SuggestionCreationContainer/>
            <SuggestionsBody/>
        </Box>
    )
}