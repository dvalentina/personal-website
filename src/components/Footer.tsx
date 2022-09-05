import React from 'react';

import { OpenInNew } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, Link, Typography, useTheme } from '@mui/material';

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
    };
  }

  return (
    <Box sx={{ flexGrow: 1, py: 3, backgroundColor: 'secondary.main' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md display="flex" flexDirection="column">
            <Link
              sx={typographyStyle('right')}
              variant="body2"
              href="https://github.com/dvalentina/personal-website"
              underline="none"
            >
              This website s GitHub repository
              <OpenInNew fontSize="inherit" />
            </Link>
            <Link
              sx={typographyStyle('right')}
              variant="body2"
              underline="none"
              href="https://picrew.me/image_maker/1076186"
            >
              Avatar is made in this picrew
              <OpenInNew fontSize="inherit" />
            </Link>
          </Grid>

          <Grid item xs={12} md="auto">
            <Box
              sx={{
                mx: 'auto',
                p: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
