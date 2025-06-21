import { Avatar, AvatarGroup, Box, Stack, Typography } from "@mui/material";

const MUIAvatar = () => {
  return (
    <Box padding={2}>
      <Stack spacing={4}>
        <Stack spacing={1} direction="row">
          <Avatar variant="circular" sx={{ backgroundColor: "primary.light" }}>BW</Avatar>
          <Avatar variant="rounded" sx={{ backgroundColor: "success.light" }}>CK</Avatar>
          <Avatar variant="square" sx={{ backgroundColor: "warning.light" }}>BA</Avatar>
        </Stack>

        <Stack spacing={1} direction="row">
          <Box>
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" component="h5">
                Community Members
              </Typography>
            </Stack>
            <AvatarGroup
              max={4}
              slotProps={{
                additionalAvatar: {
                  sx: {
                    width: 64,
                    height: 64,
                  },
                },
              }}
            >
              <Avatar
                src="https://randomuser.me/api/portraits/women/70.jpg"
                alt="Jane Doe"
                sx={{
                  width: 64,
                  height: 64,
                }}
              />
              <Avatar
                src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="Melissa Jones"
                sx={{
                  width: 64,
                  height: 64,
                }}
              />
              <Avatar
                src="https://randomuser.me/api/portraits/women/82.jpg"
                alt="Emilia Watson"
                sx={{
                  width: 64,
                  height: 64,
                }}
              />
              <Avatar
                sx={{ backgroundColor: "primary.light", width: 64, height: 64 }}
              >
                BW
              </Avatar>
              <Avatar
                sx={{ backgroundColor: "success.light", width: 64, height: 64 }}
              >
                CK
              </Avatar>
            </AvatarGroup>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MUIAvatar;
