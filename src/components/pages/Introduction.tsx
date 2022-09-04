import React from 'react';
import { useTranslation } from 'react-i18next';

import { FileDownloadOutlined, HandshakeTwoTone, Place } from '@mui/icons-material';
import { Box, Button, Container, Grid, Link, Stack, Typography, useTheme } from '@mui/material';

import { CV_DOWNLOAD_NAME, CV_LINK, ID_CONTACT } from '../../constants/constants';
import avatar from '../../images/avatar_bg_red.png';
import Emoji from '../Emoji';

function Text() {
  const { t } = useTranslation();
  const theme = useTheme();

  const typographyStyle = () => ({
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'inherit',
    },
    whiteSpace: 'pre-line',
  });

  return (
    <Box>
      <Typography component="h1" variant="h4" color="text.primary" gutterBottom sx={typographyStyle}>
        {t('introduction.greeting')}
        <Emoji label="waving hand" symbol="👋" />
        {t('introduction.intro_1')}
        <Typography component="span" variant="h4" color="primary">
          {t('introduction.name')}
        </Typography>
      </Typography>
      <Typography component="h1" variant="h4" color="text.primary" gutterBottom sx={typographyStyle}>
        {t('introduction.intro_2')}
        <Place sx={{ fontSize: '2.25rem', verticalAlign: 'bottom', mb: '0.375rem' }} color="secondary" />
        {t('introduction.place')}
      </Typography>
    </Box>
  );
}

function Buttons() {
  const { t } = useTranslation();

  return (
    <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
      <Button
        component={Link}
        href={`#${ID_CONTACT}`}
        color="primary"
        size="large"
        variant="contained"
        endIcon={<HandshakeTwoTone />}
      >
        {t('global.contact')}
      </Button>
      <Button
        sx={{ display: { xs: 'none', sm: 'inherit' } }}
        size="large"
        variant="outlined"
        component={Link}
        href={CV_LINK}
        download={CV_DOWNLOAD_NAME}
        endIcon={<FileDownloadOutlined />}
      >
        {t('global.CV_long')}
      </Button>
      <Button
        sx={{ display: { xs: 'inherit', sm: 'none' } }}
        size="large"
        variant="outlined"
        component={Link}
        href={CV_LINK}
        download={CV_DOWNLOAD_NAME}
        endIcon={<FileDownloadOutlined />}
      >
        {t('global.CV_short')}
      </Button>
    </Stack>
  );
}

function Introduction() {
  return (
    <Box sx={{ pt: 8, my: 12 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md="auto" sx={{ display: 'flex' }} justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <img src={avatar} alt="avatar" style={{ width: '300px', height: '300px' }} />
          </Grid>
          <Grid
            item
            xs={12}
            md
            sx={{ display: 'flex' }}
            flexDirection="column"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            justifyContent={{ xs: 'flex-start', md: 'center' }}
          >
            <Text />
            <Buttons />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Introduction;
