import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '../themes/theme';

import Experience from './Experience';
import Header from './Header';
import Introduction from './Introduction';

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Header />
        <Introduction />
        <Experience />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
