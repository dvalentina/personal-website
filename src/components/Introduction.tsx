import React from 'react';
import { useTranslation } from 'react-i18next';

import { AttachFile, HandshakeTwoTone, Place } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

import avatar from '../images/avatar_bg_red.png';

import Emoji from './Emoji';

function Introduction() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex' }}>
          <img src={avatar} alt="avatar" style={{ width: '300px', height: '300px' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', ml: '30px' }}>
            <Typography
              component="h1"
              variant="h4"
              color="text.primary"
              gutterBottom
              style={{ whiteSpace: 'pre-line' }}
            >
              {t('introduction.greeting')}
              <Emoji label="waving hand" symbol="👋" />
              {t('introduction.intro_1')}
              <Typography component="span" variant="h4" color="primary">
                {t('introduction.name')}
              </Typography>
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              color="text.primary"
              gutterBottom
              style={{ whiteSpace: 'pre-line' }}
            >
              {t('introduction.intro_2')}
              <Place sx={{ fontSize: '2.25rem', verticalAlign: 'bottom', mb: '0.375rem' }} color="secondary" />
              {t('introduction.place')}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button size="large" variant="contained" endIcon={<HandshakeTwoTone />}>
                {t('global.contact')}
              </Button>
              <Button size="large" variant="outlined" endIcon={<AttachFile />}>
                {t('global.resume_long')}
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Introduction;
