import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const MUISkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {/* Basic Example */}
      {/* <Stack spacing={1} width="250px" margin={4}>
        <Skeleton variant="text" animation={false} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton
          variant="rectangular"
          width={250}
          height={125}
          animation="pulse"
        />
        <Skeleton variant="rounded" width={250} height={50} animation="wave" />
      </Stack> */}

      {/* Advanced Example */}
      <Box sx={{ width: "250px" }} margin={5}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={256}
            height={144}
            animation="wave"
          />
        ) : (
          <img
            src="https://images.pexels.com/photos/9613724/pexels-photo-9613724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="skeleton"
            width={256}
            height={144}
          />
        )}
        <Stack
          direction="row"
          spacing={1}
          sx={{ width: "100%", marginTop: "12px" }}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          ) : (
            <Avatar src="https://randomuser.me/api/portraits/women/60.jpg" />
          )}
          <Stack sx={{ width: "80%" }}>
            {loading ? (
              <>
                <Typography variant="body1">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
                <Typography variant="body2">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="body1">React MUI Tutorial</Typography>
              </>
            )}
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default MUISkeleton;
