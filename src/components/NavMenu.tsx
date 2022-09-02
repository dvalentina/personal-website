import React from 'react';
import { useTranslation } from 'react-i18next';

import { FileDownloadOutlined, HandshakeTwoTone, Menu as MenuIcon } from '@mui/icons-material';
import { Box, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material';

import { CV_DOWNLOAD_NAME, CV_LINK, ID_CONTACT, ID_EXPERIENCE, ID_SKILLS } from '../constants/constants';

function NavMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const { t } = useTranslation();

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpen}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleClose}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <MenuItem component="a" href={`#${ID_EXPERIENCE}`} key="experience" onClick={handleClose}>
          <Typography textAlign="center">{t('global.experience')}</Typography>
        </MenuItem>
        <MenuItem component="a" href={`#${ID_SKILLS}`} key="skills" onClick={handleClose}>
          <Typography textAlign="center">{t('global.skills')}</Typography>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem key="cv" component="a" href={CV_LINK} download={CV_DOWNLOAD_NAME} onClick={handleClose}>
          <FileDownloadOutlined fontSize="small" sx={{ color: 'text.secondary', mr: 1 }} />
          <Typography textAlign="center">{t('global.CV_short')}</Typography>
        </MenuItem>
        <MenuItem component="a" href={`#${ID_CONTACT}`} key="contact" onClick={handleClose}>
          <HandshakeTwoTone fontSize="small" sx={{ color: 'text.secondary', mr: 1 }} />
          <Typography textAlign="center">{t('global.contact')}</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default NavMenu;
