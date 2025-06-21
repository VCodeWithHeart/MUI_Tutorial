import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useState } from "react";

const MUIDialog = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    console.log("handleClose triggered");
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        aria-labelledby="dialog-title"
        aria-description="dialog-description"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="dialog-title">Submit The Test ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the test? you will not be able to
            edit after submitting
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button autoFocus onClick={handleClose}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MUIDialog;
