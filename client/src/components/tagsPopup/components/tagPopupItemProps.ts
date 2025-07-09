import type {Tag} from "../../../models/tag.ts";

export interface TagPopupItemProps {
    tag: Tag;
    onChange: () => void;
    isSelected: boolean;
}