import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Grid, Typography } from '@mui/material';

import { ID_CONTACT } from '../../constants/constants';

import ContactForm from './ContactForm';
import ContactSocial from './ContactSocial';

function Contact() {
  const { t } = useTranslation();

  return (
    <Container id={ID_CONTACT} maxWidth="xl" sx={{ mb: 4 }}>
      <Typography component="h1" variant="h4" align="center">
        {t('contact.title')}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4} lg={6}>
          <ContactSocial />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
