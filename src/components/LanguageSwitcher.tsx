import React from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <Stack direction="row" spacing={4} sx={{ mr: '1rem' }}>
      <StyledToggleButtonGroup
        value={i18n.language}
        exclusive
        color="secondary"
        onChange={(e) => i18n.changeLanguage((e.target as HTMLInputElement).value)}
        aria-label="language"
        size="small"
      >
        <ToggleButton value="en" aria-label="english">
          en
        </ToggleButton>
        <ToggleButton value="ru" aria-label="russian">
          ru
        </ToggleButton>
      </StyledToggleButtonGroup>
    </Stack>
  );
}

export default LanguageSwitcher;
