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
      color: alpha(theme.palette.secondary.main, 0.75),
    };
  }

  return (
    <Box sx={{ flexGrow: 1, py: 3, backgroundColor: 'primary.dark' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md>
            <Typography sx={typographyStyle('right')} component="p" variant="body2">
              Avatar by linktoauthor made in this picrew
            </Typography>
            <Typography sx={typographyStyle('right')} component="p" variant="body2">
              This website s GitHub repository
            </Typography>
          </Grid>

          <Grid item xs={12} md="auto">
            <Box
              sx={{
                mx: 'auto',
                p: 1,
                backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                color: alpha(theme.palette.secondary.main, 0.75),
                borderRadius: '4px',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>{socialComponents}</Box>
              <Typography align="center" component="p" variant="body2">
                {EMAIL}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md>
            <Typography sx={typographyStyle('left')} component="p" variant="body2">
              Days since last update: 0
            </Typography>
            <Typography sx={typographyStyle('left')} component="p" variant="body2">
              Made by Danilova Valentina
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
