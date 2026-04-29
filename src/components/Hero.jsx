// import React from 'react';
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
import couch_image from '../assets/couch.png';
import dots_light from '../assets/dots-light.svg';

export default function Hero() {
  return (
    <Box sx={{ 
      bgcolor: "#3B5D50", 
      minHeight: { xs: 'auto', md: '80vh' }, 
      display: 'flex', 
      alignItems: 'center',
      overflow: 'hidden',
      py: { xs: 8, md: 0 } 
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} alignItems="center">
          
          {/* Text Content */}
          <Grid item xs={12} md={5}>
              <Typography 
                variant="h2" 
                sx={{ 
                  color: '#fff', 
                  fontWeight: '600', 
                  mb: 3, 
                  fontSize: { xs: '2rem', md: '3.5rem' },
                  lineHeight: 1.2
                }}
              >
                Modern Interior <br /> Design Studio
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255,255,255,0.5)', 
                  mb: 4, 
                  fontSize: '14px',
                  maxWidth: '450px'
                }}
              >
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button 
                  variant="contained" 
                  sx={{
                    bgcolor: '#f9bf29', 
                    color: '#2f2f2f', 
                    borderRadius: '30px', 
                    px: 4, 
                    py: 1.5,
                    fontWeight: '600',
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#e1ad25' }
                  }}
                >
                  Shop Now
                </Button>
                <Button 
                  variant="outlined" 
                  sx={{
                    color: '#fff', 
                    borderColor: 'rgba(255,255,255,0.3)', 
                    borderRadius: '30px', 
                    px: 4, 
                    textTransform: 'none',
                    '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' }
                  }}
                >
                  Explore
                </Button>
              </Stack>
          </Grid>

          {/* Image Content Area */}
          <Grid item xs={12} md={7} sx={{ position: 'relative', mt: { xs: 5, md: 0 } }}>
            <Box sx={{ 
              position: 'relative', 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'flex-end' 
            }}>
              
              {/* Dots Image*/}
              <Box
                component="img"
                src={dots_light}
                alt="dots pattern"
                sx={{
                  position: 'absolute',
                  // top: '-50px',
                  right: '-25%',
                  zIndex: 0,
                  opacity: 0.8
                }}
              />

              {/* Main Couch Image */}
              <Box 
                component="img"
                src={couch_image} 
                alt="couch" 
                sx={{ 
                  width: '100%', 
                  maxWidth: '700px', 
                  height: 'auto',
                  position: 'relative',
                  zIndex: 1, 
                  transform: { md: 'scale(1.1) translateX(50px)' } // لجعلها تخرج قليلاً عن الإطار كما في التصميم
                }} 
              />
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}