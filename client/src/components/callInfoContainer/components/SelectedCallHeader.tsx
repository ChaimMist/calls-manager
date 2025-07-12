import {useCallRecords} from "../../../contexts/callRecordsContext.tsx";
import {Box, Typography} from "@mui/material";
import TagsDisplay from "../../tagsDisplay/TagsDisplay.tsx";
import type {Tag} from "../../../models/tag.ts";
import type { CallRecordUpdateTagsDto } from '../../../models/callRecord.ts';

export default function SelectedCallHeader() {
    const {selectedCallRecord, updateCallTags} = useCallRecords();

    const handleSaveTags = (tags: Tag[]): void => {
      const tagIds: string[] = tags.map((tag: Tag): string => tag.id);
      if (!selectedCallRecord) return;
      const updatedCall: CallRecordUpdateTagsDto = {
        id: selectedCallRecord.id,
        tagIds: tagIds
      }
      updateCallTags(updatedCall)
    };

    return (
        <Box p={2}>
            <Typography variant={'h4'}>
                {selectedCallRecord?.name || 'Please select a call'}
            </Typography>
            {!!selectedCallRecord &&
                <Box display={'flex'} flexDirection={"row"} borderRadius={2} overflow={'auto'} p={2} boxShadow={2} mt={4} alignItems={'center'} gap={2}>
                    <Typography variant={'h6'}>
                        Tags
                    </Typography>
                    <TagsDisplay displayedTags={selectedCallRecord.tags} onSaveTags={handleSaveTags} isEditable={true}/>
                </Box>
            }
        </Box>
    );
}