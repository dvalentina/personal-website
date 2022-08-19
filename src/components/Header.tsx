import React from 'react';

import { HandshakeTwoTone } from '@mui/icons-material';
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
          <Button color="inherit" variant="outlined" endIcon={<HandshakeTwoTone />}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
