import type {DialogButtonProps} from "./dialogButtonProps.ts";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    FormControl
} from "@mui/material";
import {useState} from "react";

export default function DialogButton({dialogTitle, buttonText, onSave, dialogDescription}: DialogButtonProps){
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen: () => void = (): void => {
        setDialogOpen(true);
    };

    const handleDialogClose: () => void = (): void =>  {
        setDialogOpen(false);
    };

    const handleDialogSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (onSave) {
            onSave(event);
        }
        setDialogOpen(false);
    }

    return (
        <>
            <Button variant={'contained'} onClick={handleDialogOpen}>
                {buttonText || "New"}
            </Button>
            <Dialog open={dialogOpen} fullWidth>
                <DialogTitle>{dialogTitle || 'Dialog'}</DialogTitle>
                <DialogContent sx={{ paddingBottom: 0 }}>
                    <DialogContentText>
                        {dialogDescription || 'Please enter the required information.'}
                    </DialogContentText>
                    <FormControl fullWidth component={'form'} onSubmit={handleDialogSubmit}>
                        <TextField
                            autoFocus
                            fullWidth
                            required
                            margin={"dense"}
                            id={"dialogInput"}
                            name={"dialogInput"}
                            label={buttonText}
                            type={"text"}
                            variant={"standard"}
                        />
                        <DialogActions>
                            <Button onClick={handleDialogClose}>Cancel</Button>
                            <Button type="submit">Save</Button>
                        </DialogActions>
                    </FormControl>
                </DialogContent>
            </Dialog>
        </>
    )
}