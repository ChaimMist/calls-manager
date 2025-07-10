import type {Tag} from "../../models/tag.ts";

export interface TagsDisplayProps {
    tags: Tag[];
    onSaveTags: (selectedTags: Tag[]) => void;
    isEditable?: boolean;
}