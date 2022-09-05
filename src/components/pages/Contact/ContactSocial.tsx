import React from 'react';
import { useTranslation } from 'react-i18next';

import { Close, ContentCopy } from '@mui/icons-material';
import { Box, IconButton, Paper, Snackbar, Typography } from '@mui/material';

import { EMAIL, SOCIAL_MEDIA } from '../../../constants/constants';

function ContactSocial() {
  const { t } = useTranslation();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const socialComponents: React.ReactElement[] = SOCIAL_MEDIA.map((element) => (
    <IconButton key={element.key} size="large" href={element.link}>
      {element.icon}
    </IconButton>
  ));

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Paper variant="outlined" sx={{ mt: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography component="h2" variant="h6" align="center" textTransform="uppercase">
        {t('contact.social_media')}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>{socialComponents}</Box>
      <Typography component="h2" variant="h6" align="center" textTransform="uppercase">
        {t('contact.email')}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography align="center">{EMAIL}</Typography>
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

export default ContactSocial;
