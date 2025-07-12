

export interface DialogButtonProps {
    dialogTitle: string;
    buttonText?: string;
    dialogDescription: string;
    isLoading?: boolean;
    onSave?: (event: React.FormEvent<HTMLFormElement>) => void;
}