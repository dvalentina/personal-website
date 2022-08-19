import React from 'react';

import { AttachFile, HandshakeTwoTone, Place } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

import avatar from '../images/avatar_bg_red.png';

import Emoji from './Emoji';

function Introduction() {
  const hello = 'Hi ';
  const introPart1 = ", I'm";
  const name = ' Danilova Valentina';
  const introPart2 = 'ReactJS developer based in ';
  const place = 'Yerevan, Armenia';

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
              {hello}
              <Emoji label="waving hand" symbol="👋" />
              {introPart1}
              <Typography component="span" variant="h4" color="primary">
                {name}
              </Typography>
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              color="text.primary"
              gutterBottom
              style={{ whiteSpace: 'pre-line' }}
            >
              {introPart2}
              <Place sx={{ fontSize: '2.25rem', verticalAlign: 'bottom', mb: '0.375rem' }} color="secondary" />
              {place}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button size="large" variant="contained" endIcon={<HandshakeTwoTone />}>
                Contact me!
              </Button>
              <Button size="large" variant="outlined" endIcon={<AttachFile />}>
                Dowload resume
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Introduction;
