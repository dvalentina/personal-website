import React from 'react';
import { useTranslation } from 'react-i18next';

import { FileDownloadOutlined, HandshakeTwoTone } from '@mui/icons-material';
import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';

import { CV_DOWNLOAD_NAME, CV_LINK, ID_CONTACT } from '../constants/constants';

import LanguageSwitcher from './LanguageSwitcher';

function Header() {
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Frontend Dev
          </Typography>
          <LanguageSwitcher />
          <Button color="inherit">{t('global.about')}</Button>
          <Button color="inherit">{t('global.work')}</Button>
          <Button
            color="inherit"
            component={Link}
            href={CV_LINK}
            download={CV_DOWNLOAD_NAME}
            endIcon={<FileDownloadOutlined sx={{ mr: '10px', ml: '-5px' }} />}
          >
            {t('global.CV_short')}
          </Button>
          <Button
            component={Link}
            href={`#${ID_CONTACT}`}
            color="secondary"
            variant="contained"
            endIcon={<HandshakeTwoTone />}
          >
            {t('global.contact')}
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

export default Header;
