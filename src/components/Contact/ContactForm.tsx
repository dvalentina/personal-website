import React from 'react';

import { Button, Grid, Paper, TextField, Typography } from '@mui/material';

function ContactForm() {
  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography component="h2" variant="h6" mb={2}>
        ...or write me a letter through this form!
      </Typography>
      <Grid container component="form" noValidate autoComplete="off" rowSpacing={2}>
        <Grid item xs={12}>
          <TextField required fullWidth id="name" label="Name" />
        </Grid>
        <Grid item xs={12}>
          <TextField required fullWidth id="email" label="E-mail" type="email" />
        </Grid>
        <Grid item xs={12}>
          <TextField required fullWidth id="title" label="Title" />
        </Grid>
        <Grid item xs={12}>
          <TextField required fullWidth multiline id="message" label="Message" rows={10} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" fullWidth>
            Send
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ContactForm;
