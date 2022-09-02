/* eslint-disable node/no-unsupported-features/es-syntax */
import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { useTranslation } from 'react-i18next';

import { Send } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Alert, Grid, Paper, Snackbar, TextField, Typography } from '@mui/material';

import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from '../../constants/constants';

function ContactForm() {
  const { t } = useTranslation();

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

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  function validateField(name: string, value: string) {
    if (value.trim().length === 0) {
      setFormData((prev) => ({
        ...prev,
        ...{
          [`${name}Error`]: true,
          [`${name}Help`]: 'This field should not be empty',
        },
      }));
    }
  }

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

  function afterSubmit(success: boolean) {
    setLoading(false);
    setAlertSuccess(success);
    setAlertOpen(true);
  }

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    validateOnSubmit();

    const formErrors = formData.nameError || formData.emailError || formData.subjectError || formData.messageError;

    if (!formErrors) {
      setLoading(true);
      send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_USER_ID)
        .then(() => {
          afterSubmit(true);
        })
        .catch(() => {
          afterSubmit(false);
        });
    }
  };

  return (
    <Paper variant="outlined" sx={{ mt: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography component="h2" variant="h6" mb={2}>
        {t('contact.form_title')}
      </Typography>
      <Grid container noValidate component="form" autoComplete="off" rowSpacing={2} onSubmit={onSubmit}>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            required
            fullWidth
            id="name"
            label={t('contact.form_name')}
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
            label={t('contact.form_email')}
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
            label={t('contact.form_subject')}
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
            label={t('contact.form_message')}
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
            loadingPosition="end"
            endIcon={<Send />}
          >
            {t('contact.form_submit')}
          </LoadingButton>
        </Grid>
      </Grid>
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity={alertSuccess ? 'success' : 'error'} sx={{ width: '100%' }}>
          {alertSuccess ? t('contact.alert_success') : t('contact.alert_error')}
        </Alert>
      </Snackbar>
    </Paper>
  );
}

export default ContactForm;
