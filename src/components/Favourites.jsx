// Favorites.jsx
import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Avatar,
  Paper,
} from '@mui/material';
import { Favorite as FavoriteIcon, Star as StarIcon } from '@mui/icons-material';

const favorites = [
  {
    id: 1,
    title: 'Sunset View Resort',
    description: 'Beautiful resort with ocean view.',
    image: 'https://via.placeholder.com/300x200?text=Resort',
  },
  {
    id: 2,
    title: 'Mountain Adventure',
    description: 'Breathtaking mountain trails.',
    image: 'https://via.placeholder.com/300x200?text=Mountain',
  },
  {
    id: 3,
    title: 'Sushi Masterclass',
    description: 'Learn to cook authentic sushi.',
    image: 'https://via.placeholder.com/300x200?text=Sushi',
  },
  {
    id: 4,
    title: 'Night City Tour',
    description: 'Explore the city lights at night.',
    image: 'https://via.placeholder.com/300x200?text=City+Lights',
  },
  {
    id: 5,
    title: 'Forest Retreat',
    description: 'Peaceful forest getaway cabin.',
    image: 'https://via.placeholder.com/300x200?text=Forest',
  },
  {
    id: 6,
    title: 'Wine Tasting Experience',
    description: 'Sample premium wines from around the world.',
    image: 'https://via.placeholder.com/300x200?text=Wine',
  },
];

const Favorites = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }}>
      {/* Header */}
      <Paper elevation={3} sx={{ padding: 3, textAlign: 'center', backgroundColor: '#f5f5f5' }}> 
        <Avatar sx={{ width: 56, height: 56, margin: '0 auto 16px', bgcolor: 'secondary.main' }}>
          <StarIcon />
        </Avatar>
        <Typography variant="h4" gutterBottom>
          My Favorite Items
        </Typography>
        <Typography color="textSecondary">
          A collection of your most loved experiences and places.
        </Typography>
      </Paper>

      {/* Favorites Grid */}
      <Box sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          {favorites.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia component="img" height="140" image={item.image} alt={item.title} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <IconButton color="error" aria-label="remove from favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <Typography variant="body2" color="textSecondary">
                    Favorited
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Favorites;