import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          py: 2,
          px: { xs: 2, sm: 4 },
          boxShadow: 1,
        }}
      >
        <Box
          sx={{
            maxWidth: '1200px',
            mx: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: 'white', fontWeight: 500 }}
          >
            MyApp
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ alignItems: 'center' }}
          >
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <Button
                key={item}
                href={`#${item.toLowerCase()}`}
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {item}
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* About Content */}
      <Box
        sx={{
          flex: 1,
          py: { xs: 4, sm: 6 },
          px: { xs: 2, sm: 4 },
          backgroundColor: 'grey.100',
          textAlign: 'center',
        }}
      >
        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
              fontSize: { xs: '1.8rem', sm: '2.5rem' },
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 3,
              fontSize: { xs: '1rem', sm: '1.2rem' },
            }}
          >
            We are a passionate team dedicated to delivering innovative solutions that empower our users. Our mission is to create seamless experiences through cutting-edge technology and user-centric design.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'primary.main',
              py: 1,
              px: 3,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              '&:hover': { backgroundColor: 'primary.dark' },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: 'grey.900',
          py: 2,
          px: { xs: 2, sm: 4 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: 'white', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}
        >
          © 2025 MyApp. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;