import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

const MUIBreadcrumbs = () => {
  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNext fontSize="small" />}
        maxItems={3}
        itemsAfterCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MUIBreadcrumbs;
