/* eslint-disable node/no-unsupported-features/es-syntax */
import React, { useState } from 'react';
import { send } from 'emailjs-com';

import { Send } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Grid, Paper, TextField, Typography } from '@mui/material';

import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from '../../constants/constants';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormData((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  const handleLoadingChange = () => {
    setLoading(!loading);
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    handleLoadingChange();
    send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        handleLoadingChange();
      })
      .catch((err) => {
        console.log('FAILED...', err);
        handleLoadingChange();
      });
  };

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography component="h2" variant="h6" mb={2}>
        ...or write me a letter through this form!
      </Typography>
      <Grid container component="form" noValidate autoComplete="off" rowSpacing={2} onSubmit={onSubmit}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={formData.name}
            onChange={changeInputHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            type="email"
            value={formData.email}
            onChange={changeInputHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="subject"
            name="subject"
            label="Subject"
            value={formData.subject}
            onChange={changeInputHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            multiline
            id="message"
            name="message"
            label="Message"
            rows={10}
            value={formData.message}
            onChange={changeInputHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            variant="contained"
            type="submit"
            fullWidth
            loading={loading}
            loadingIndicator="Sending…"
            loadingPosition="end"
            endIcon={<Send />}
          >
            Send
          </LoadingButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ContactForm;
