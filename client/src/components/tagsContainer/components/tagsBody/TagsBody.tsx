import type { Tag } from "../../../../models/tag.ts";
import {Box} from "@mui/material";
import type {JSX} from "react";
import TagItem from "../../../tagItem/TagItem.tsx";

export default function TagsBody(): JSX.Element {
    const tags: Tag[] = [
        {
            name: 'urgent',
            createdAt: '2023-10-01T12:00:00Z',
            updatedAt: '2023-10-01T12:00:00Z',
            id: '1'
        },
        {
            id: '2',
            name: 'feature',
            createdAt: '2023-10-02T12:00:00Z',
            updatedAt: '2023-10-02T12:00:00Z'
        }
    ]

    return (
        <Box flex={1} display={'flex'} flexDirection={'column'} borderRadius={3} gap={2} bgcolor={'background.paper'} p={2}>
            {
                tags.map((tag: Tag) => {
                    return <TagItem key={tag.name} tag={tag}/>
                })
            }
        </Box>
    );
}
