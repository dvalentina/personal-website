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
    nameError: false,
    nameHelp: '',
    email: '',
    emailError: false,
    emailHelp: '',
    subject: '',
    subjectError: false,
    subjectHelp: '',
    message: '',
    messageError: false,
    messageHelp: '',
  });

  const [loading, setLoading] = useState(false);

  function formErrors() {
    return formData.nameError || formData.emailError || formData.subjectError || formData.messageError;
  }

  const validateField = (name: string, value: string) => {
    if (value.trim().length === 0) {
      setFormData((prev) => ({
        ...prev,
        ...{
          [`${name}Error`]: true,
          [`${name}Help`]: 'This field should not be empty',
        },
      }));
    }
  };

  const validateOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    validateField(name, value);
  };

  function validateOnSubmit() {
    validateField('name', formData.name);
    validateField('email', formData.email);
    validateField('subject', formData.subject);
    validateField('message', formData.message);
  }

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name } = event.target;

    setFormData((prev) => ({
      ...prev,
      ...{
        [name]: event.target.value,
        [`${name}Error`]: false,
        [`${name}Help`]: '',
      },
    }));
  };

  const handleLoadingChange = () => {
    setLoading(!loading);
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    validateOnSubmit();

    if (!formErrors) {
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
    }
  };

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography component="h2" variant="h6" mb={2}>
        ...or write me a letter through this form!
      </Typography>
      <Grid container noValidate component="form" autoComplete="off" rowSpacing={2} onSubmit={onSubmit}>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={formData.name}
            onChange={changeInputHandler}
            error={formData.nameError}
            helperText={formData.nameHelp}
            onBlur={validateOnBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            type="email"
            value={formData.email}
            onChange={changeInputHandler}
            error={formData.emailError}
            helperText={formData.emailHelp}
            onBlur={validateOnBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            required
            fullWidth
            id="subject"
            name="subject"
            label="Subject"
            value={formData.subject}
            onChange={changeInputHandler}
            error={formData.subjectError}
            helperText={formData.subjectHelp}
            onBlur={validateOnBlur}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            required
            fullWidth
            multiline
            id="message"
            name="message"
            label="Message"
            rows={10}
            value={formData.message}
            onChange={changeInputHandler}
            error={formData.messageError}
            helperText={formData.messageHelp}
            onBlur={validateOnBlur}
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
