import { Box } from "@mui/material";
import type {JSX} from "react";
import SuggestionItem from "../../../suggestionItem/SuggestionItem.tsx";
import { useSuggestedTasks } from '../../../../hooks/queryHooks/useSuggestedTasks.ts';
import type { SuggestedTask } from '../../../../models/suggestedTask.ts';

export default function SuggestionsBody(): JSX.Element {
    const {data: suggestions = []} = useSuggestedTasks();
    return (
        <Box boxShadow={2} height={'100%'} display={'flex'} overflow={'auto'} flexDirection={'column'} borderRadius={3} gap={2} bgcolor={'background.paper'} p={2}>
            {
                suggestions.map((suggestion: SuggestedTask) => {
                    return <SuggestionItem key={suggestion.id} suggestion={suggestion}/>
                })
            }
        </Box>
    );
}
