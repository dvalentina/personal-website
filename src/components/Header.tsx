import React from 'react';
import { useTranslation } from 'react-i18next';

import { AttachFile, HandshakeTwoTone } from '@mui/icons-material';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import LanguageSwitcher from './LanguageSwitcher';

function Header() {
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Frontend Dev
          </Typography>
          <LanguageSwitcher />
          <Button color="inherit">{t('global.about')}</Button>
          <Button color="inherit">{t('global.work')}</Button>
          <Button color="inherit" endIcon={<AttachFile sx={{ mr: '10px', ml: '-5px' }} />}>
            {t('global.resume_short')}
          </Button>
          <Button color="secondary" variant="contained" endIcon={<HandshakeTwoTone />}>
            {t('global.contact')}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
