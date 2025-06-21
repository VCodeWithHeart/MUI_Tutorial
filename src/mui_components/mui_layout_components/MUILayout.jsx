import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

const MUILayout = () => {
  return (
    <Paper sx={{ padding: "32px", margin: "200px" }} elevation={4}>
      <Stack
        margin={2}
        p={0.5}
        spacing={0.5}
        sx={{ border: "1px solid" }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            padding: "16px",
            height: "100px",
            width: "100px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Code Evolution
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={1}
        ></Box>
      </Stack>

      <Grid
        container
        m={2}
        rowSpacing={1.5}
        columnSpacing={2}
        bgcolor="info.light"
      >
        <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
          <Box bgcolor="secondary.main" color="white" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
          <Box bgcolor="secondary.dark" color="white" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
          <Box bgcolor="secondary.dark" color="white" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
          <Box bgcolor="secondary.main" color="white" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MUILayout;
