

export interface DialogButtonProps {
    dialogTitle: string;
    buttonText?: string;
    dialogDescription: string;
    onSave?: (event: React.FormEvent<HTMLFormElement>) => void;
}