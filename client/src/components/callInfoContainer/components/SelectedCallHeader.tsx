import {useCallRecords} from "../../../contexts/callRecordsContext.tsx";
import {Box, Typography} from "@mui/material";
import TagsDisplay from "../../tagsDisplay/TagsDisplay.tsx";
import type {Tag} from "../../../models/tag.ts";
import {toast} from "react-toastify";

export default function SelectedCallHeader() {
    const {selectedCallRecord, editSelectedCallTags} = useCallRecords();
    const handleSaveTags = (tags: Tag[]) => {
        editSelectedCallTags(tags);
        toast.success('Tags updated successfully');
    };

    return (
        <Box p={2}>
            <Typography variant={'h4'}>
                {selectedCallRecord?.name || 'Please select a call'}
            </Typography>
            {!!selectedCallRecord &&
                <Box display={'flex'} flexDirection={"row"} mt={4} alignItems={'center'} gap={2}>
                    <Typography variant={'h6'}>
                        Tags
                    </Typography>
                    <TagsDisplay tags={selectedCallRecord.tags} onSaveTags={handleSaveTags} isEditable={true}/>
                </Box>
            }
        </Box>
    );
}