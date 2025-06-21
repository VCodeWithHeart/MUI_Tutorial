import { Box, Button, Stack, Typography, AppBar, Toolbar } from '@mui/material';

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            paddingX: { xs: 2, sm: 3 },
          }}
        >
          <Typography variant="h6" component="div" color="primary">
            MyApp
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              mt: { xs: 1, sm: 0 },
              '& a': {
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': {
                  color: 'primary.main',
                },
              },
            }}
          >
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          textAlign: 'center',
          py: 10,
          px: 2,
          backgroundImage:
            'linear-gradient(to right bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.4)), url("https://source.unsplash.com/featured/?technology")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to MyApp
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          sx={{ mb: 4, maxWidth: '800px' }}
        >
          Discover amazing features and services tailored for you. Join us today
          and experience the difference!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="#contact" 
        >
          Get Started
        </Button>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          textAlign: 'center',
          bgcolor: 'grey.100',
          borderTop: 1,
          borderColor: 'divider',
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © 2025 MyApp. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Home;