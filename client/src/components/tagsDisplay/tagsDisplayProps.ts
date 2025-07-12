import type {Tag} from "../../models/tag.ts";

export interface TagsDisplayProps {
    displayedTags: Tag[];
    onSaveTags: (selectedTags: Tag[]) => void;
    isEditable?: boolean;
}