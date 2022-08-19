import React from 'react';

import { AttachFile, HandshakeTwoTone } from '@mui/icons-material';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Frontend Dev
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Work</Button>
          <Button color="inherit" endIcon={<AttachFile sx={{ mr: '10px', ml: '-5px' }} />}>
            Resume
          </Button>
          <Button color="secondary" variant="contained" endIcon={<HandshakeTwoTone />}>
            Contact me!
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
