import React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Chip, Container, Grid, Typography } from '@mui/material';

import { ID_SKILLS, SKILLS } from '../../constants/constants';

function Skills() {
  const { t } = useTranslation();

  const skillsRows: { [id: string]: React.ReactElement } = {};

  Object.entries(SKILLS).forEach(([key, value]) => {
    const row = value.map((element) => (
      <Grid item key={element}>
        <Chip label={element} variant="outlined" />
      </Grid>
    ));

    skillsRows[key] = (
      <Grid container item spacing={1} justifyContent="center">
        {row}
      </Grid>
    );
  });

  return (
    <Box id={ID_SKILLS} sx={{ pt: 16 }}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h4" align="center" mb={2} textTransform="uppercase">
          {t('global.skills')}
        </Typography>
        <Typography variant="subtitle1" align="center" mb={2}>
          {t('skills.subtitle')}
        </Typography>
        <Grid container spacing={2}>
          {skillsRows.main}
          {skillsRows.other}
          {skillsRows.tools}
          {skillsRows.web}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;
