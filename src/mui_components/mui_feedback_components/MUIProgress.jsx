import { CircularProgress, LinearProgress, Stack } from "@mui/material";

const MUIProgress = () => {
  return (
    <Stack spacing={2} margin={4}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress color="secondary" variant="determinate" value={50} />

      <LinearProgress />
      <LinearProgress color="warning" />
      <LinearProgress color="error" variant="determinate" value={90} />
    </Stack>
  );
};

export default MUIProgress;
