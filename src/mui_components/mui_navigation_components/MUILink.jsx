import { Link, Stack } from "@mui/material";

const MUILink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary">Secondary</Link>
      <Link href="#" color="warning" underline="hover" variant="h6" component="h5">Underlined</Link>
    </Stack>
  );
};

export default MUILink;
