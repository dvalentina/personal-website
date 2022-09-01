import React from 'react';

import { alpha, Box, Container, Grid, IconButton, Typography, useTheme } from '@mui/material';

import { EMAIL, SOCIAL_MEDIA } from '../constants/constants';

function Footer() {
  const theme = useTheme();

  const socialComponents: React.ReactElement[] = SOCIAL_MEDIA.map((element) => (
    <IconButton key={element.key} href={element.link}>
      {element.icon}
    </IconButton>
  ));

  function typographyStyle(align: string) {
    return {
      [theme.breakpoints.up('xs')]: {
        textAlign: 'center',
      },
      [theme.breakpoints.up('md')]: {
        textAlign: align,
      },
      color: 'white',
    };
  }

  return (
    <Box sx={{ flexGrow: 1, py: 3, backgroundColor: 'primary.dark' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs={12} md={4}>
            <Typography sx={typographyStyle('right')}>Avatar by linktoauthor made in this picrew</Typography>
            <Typography sx={typographyStyle('right')}>This website s GitHub repository</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                mx: 'auto',
                p: 1,
                backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                color: 'white',
                borderRadius: '4px',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>{socialComponents}</Box>
              <Typography align="center">{EMAIL}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography sx={typographyStyle('left')}>Days since last update: 0</Typography>
            <Typography sx={typographyStyle('left')}>Made by Danilova Valentina</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
