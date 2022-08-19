import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '../themes/theme';

import Header from './Header';
import Introduction from './Introduction';

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Header />
        <Introduction />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
