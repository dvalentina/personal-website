import React from 'react';

import { Close, ContentCopy, GitHub, LinkedIn, Telegram } from '@mui/icons-material';
import { Box, IconButton, Paper, Snackbar, Typography } from '@mui/material';

import { ISocialsElement } from '../../types';

function ContactSocials() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const socials: ISocialsElement[] = [
    {
      key: 'LinkedIn',
      link: 'https://www.linkedin.com/in/valentina-danilova-564576237/',
      icon: <LinkedIn fontSize="large" />,
    },
    {
      key: 'GitHub',
      link: 'https://github.com/dvalentina',
      icon: <GitHub fontSize="large" />,
    },
    {
      key: 'Telegram',
      link: 'https://t.me/danilova_v_v',
      icon: <Telegram fontSize="large" />,
    },
  ];

  const socialsArray: React.ReactElement[] = socials.map((element) => (
    <IconButton key={element.key} size="large" href={element.link}>
      {element.icon}
    </IconButton>
  ));

  const email = 'contact@dvalentina.me';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography component="h2" variant="h6" align="center">
        SOCIALS
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>{socialsArray}</Box>
      <Typography component="h2" variant="h6" align="center">
        E-MAIL
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography align="center">{email}</Typography>
        <IconButton size="small" onClick={copyEmail}>
          <ContentCopy fontSize="small" />
        </IconButton>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          message="Email copied to clipboard!"
          onClose={handleSnackbarClose}
          action={
            <IconButton aria-label="close" color="inherit" sx={{ p: 0.5 }} onClick={handleSnackbarClose}>
              <Close />
            </IconButton>
          }
        />
      </Box>
    </Paper>
  );
}

export default ContactSocials;
