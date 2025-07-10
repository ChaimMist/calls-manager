import { Box } from "@mui/material";
import type {JSX} from "react";
import type {SuggestionI} from "../../../../models/suggestion.ts";
import SuggestionItem from "../../../suggestionItem/SuggestionItem.tsx";

export default function SuggestionsBody(): JSX.Element {
    const suggestions: SuggestionI[] = [
        {
            id: '1',
            name: 'Fix the bug in the login page',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },{
            id: '1',
            name: 'Fix the bug in the login pageFix the bug in the login pageFix the bug in the ',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },{
            id: '1',
            name: 'Fix the bug in the login page',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },{
            id: '1',
            name: 'Fix the bug in the login page',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },{
            id: '1',
            name: 'Fix the bug in the login page',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },{
            id: '1',
            name: 'Fix the bug in the login page',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },{
            id: '1',
            name: 'Fix the bug in the login page',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },{
            id: '1',
            name: 'Fix the bug in the login page',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },{
            id: '1',
            name: 'Fix the bug in the login page',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },{
            id: '1',
            name: 'Fix the bug in the login page',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },{
            id: '1',
            name: 'Fix the bug in the login page',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },{
            id: '1',
            name: 'Fix the bug in the login page',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },{
            id: '1',
            name: 'Fix the bug in the login page',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },{
            id: '1',
            name: 'Fix the bug in the login page',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z'
        },
        {
            id: '2',
            name: 'Implement tImplement the new feature for user profilesImplement the new feature for user profileshe new feature for user profilesImplement the new feature for user profilesImplement the new feature for user profilesImplement the new feature for user profiles',
            tags: [{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            },{
                id: '2',
                name: 'urgent',
                createdAt: '2023-10-01T12:00:00Z',
                updatedAt: '2023-10-01T12:00:00Z'
            }],
            createdAt: '2023-10-02T12:00:00Z',
            updatedAt: '2023-10-02T12:00:00Z'
        }
    ]
    return (
        <Box display={'flex'} overflow={'auto'} flexDirection={'column'} borderRadius={3} gap={2} bgcolor={'background.paper'} p={2}>
            {
                suggestions.map((suggestion: SuggestionI, index: number) => {
                    return <SuggestionItem key={index} suggestion={suggestion}/>
                })
            }
        </Box>
    );
}
