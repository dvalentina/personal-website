import React from 'react';
import { useTranslation } from 'react-i18next';

import { FileDownloadOutlined, HandshakeTwoTone } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';

import { CV_DOWNLOAD_NAME, CV_LINK, ID_CONTACT, ID_EXPERIENCE, ID_SKILLS } from '../constants/constants';

import LanguageSwitcher from './LanguageSwitcher';
import NavMenu from './NavMenu';

function Header() {
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <NavMenu />
          <Typography
            variant="h6"
            component="a"
            href="#"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 'auto', color: 'inherit', textDecoration: 'none' }}
          >
            Frontend Dev
          </Typography>
          <LanguageSwitcher />
          <Button
            color="inherit"
            component={Link}
            href={`#${ID_EXPERIENCE}`}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {t('global.experience')}
          </Button>
          <Button color="inherit" component={Link} href={`#${ID_SKILLS}`} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {t('global.skills')}
          </Button>
          <Button
            color="inherit"
            component={Link}
            href={CV_LINK}
            download={CV_DOWNLOAD_NAME}
            endIcon={<FileDownloadOutlined sx={{ mr: '10px', ml: '-5px' }} />}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            {t('global.CV_short')}
          </Button>
          <Button
            component={Link}
            href={`#${ID_CONTACT}`}
            color="secondary"
            variant="contained"
            endIcon={<HandshakeTwoTone />}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            {t('global.contact')}
          </Button>
          <IconButton href={`#${ID_CONTACT}`} color="secondary" sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <HandshakeTwoTone />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
