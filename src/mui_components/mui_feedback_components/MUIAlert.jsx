import { Check, Dangerous, Error, Info } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";

const MUIAlert = () => {
  return (
    <Stack spacing={2} margin={4}>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="warning">This is an warning alert!</Alert>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="success">This is an success alert</Alert>

      <Alert severity="info" variant="outlined">
        This is an info alert
      </Alert>
      <Alert severity="warning" variant="outlined">
        This is an warning alert!
      </Alert>
      <Alert severity="error" variant="outlined">
        This is an error alert
      </Alert>
      <Alert severity="success" variant="outlined">
        This is an success alert
      </Alert>

      <Alert
        severity="info"
        variant="filled"
        icon={<Info />}
        onClose={() => alert("Close alert")}
      >
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert
        severity="warning"
        variant="filled"
        icon={<Dangerous />}
        onClose={() => alert("Close alert")}
      >
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert!
      </Alert>
      <Alert
        severity="error"
        variant="filled"
        icon={<Error fontSize="inherit" />}
        onClose={() => alert("Close alert")}
      >
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert
        severity="success"
        variant="filled"
        icon={<Check fontSize="inherit" />}
        onClose={() => alert("Close alert")}
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is an success alert
      </Alert>
    </Stack>
  );
};

export default MUIAlert;
