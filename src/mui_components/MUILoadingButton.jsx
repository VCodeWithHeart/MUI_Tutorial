import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

const MUILoadingButton = () => {
  return (
    <Stack spacing={2} margin={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading variant="outlined" loadingIndicator="Fetching...">
        Fetch Data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loading
        loadingPosition="end"
        startIcon={<Save />}
      >
        Save Data
      </LoadingButton>
    </Stack>
  );
};

export default MUILoadingButton;
