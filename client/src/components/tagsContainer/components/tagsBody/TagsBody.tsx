import type { Tag } from "../../../../models/tag.ts";
import {Box} from "@mui/material";
import type {JSX} from "react";
import TagItem from "../../../tagItem/TagItem.tsx";
import { useTagsContext } from '../../../../contexts/tagsContext.tsx';

export default function TagsBody(): JSX.Element {
   const {tags} = useTagsContext();

    return (
        <Box flex={1} boxShadow={2} overflow={'auto'} display={'flex'} flexDirection={'column'} borderRadius={3} gap={2} bgcolor={'background.paper'} p={2}>
            {
                tags.map((tag: Tag) => {
                    return <TagItem key={tag.id} tag={tag}/>
                })
            }
        </Box>
    );
}
