import React from 'react';

import { ContentCopy, GitHub, LinkedIn, Telegram } from '@mui/icons-material';
import { Box, IconButton, Paper, Typography } from '@mui/material';

function ContactSocials() {
  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography component="h2" variant="h6" align="center">
        SOCIALS
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton size="large">
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton size="large">
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton size="large">
          <Telegram fontSize="large" />
        </IconButton>
      </Box>

      <Typography component="h2" variant="h6" align="center">
        E-MAIL
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography align="center">contact@dvalentina.me</Typography>
        <IconButton size="small">
          <ContentCopy fontSize="small" />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default ContactSocials;
