import type {Tag} from "../../models/tag.ts";


export interface TagsPopupProps {
    onSaveTags: (tags: Tag[]) => void;
    selectedTags: Tag[];
}