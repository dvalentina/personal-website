import React from 'react';

import { Container, Grid, Typography } from '@mui/material';

import ContactForm from './ContactForm';
import ContactSocials from './ContactSocials';

function Contact() {
  return (
    <Container maxWidth="xl" sx={{ mb: 4 }}>
      <Typography component="h1" variant="h4" align="center">
        CONTACT
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4} lg={6}>
          <ContactSocials />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
