import { Alert, Button, Snackbar } from "@mui/material";
import { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert ref={ref} elevation={6} {...props} />;
});

const MUISnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (e, reason) => {
    console.log("reason", reason)
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form Submitted Successfully"
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      /> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <SnackbarAlert onClose={handleClose} severity="success">
          Form Submitted Successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MUISnackbar;
