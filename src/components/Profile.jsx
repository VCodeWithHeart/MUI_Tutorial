// Profile.jsx
import React from 'react';
import {
  Container,
  Box,
  Avatar,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Paper,
} from '@mui/material';
import { Edit as EditIcon, Settings as SettingsIcon, Email as EmailIcon, Phone as PhoneIcon } from '@mui/icons-material';

const Profile = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {/* Profile Header */}
      <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
        <Avatar
          alt="User Avatar"
          src="https://via.placeholder.com/150" 
          sx={{ width: 120, height: 120, margin: '0 auto 16px' }}
        />
        <Typography variant="h5" gutterBottom>
          John Doe
        </Typography>
        <Typography color="textSecondary" paragraph>
          Full Stack Developer | Tech Enthusiast | Open Source Contributor
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <IconButton color="primary" aria-label="edit profile">
            <EditIcon />
          </IconButton>
          <IconButton color="primary" aria-label="settings">
            <SettingsIcon />
          </IconButton>
        </Box>
      </Paper>

      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {/* Left Section - User Info */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Personal Info
              </Typography>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary="john.doe@example.com" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="+1 (555) 123-4567" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Section - Additional Info */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                About Me
              </Typography>
              <Divider />
              <Typography paragraph sx={{ marginTop: 2 }}>
                I'm a passionate software developer with over 5 years of experience building web applications.
                I specialize in React, Node.js, and cloud technologies. Love contributing to open-source projects
                and learning new things every day.
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Member since: January 2020
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;