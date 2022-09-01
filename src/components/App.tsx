import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '../themes/theme';

import Contact from './Contact/Contact';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Introduction from './Introduction';

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Header />
        <Introduction />
        <Experience />
        <Contact />
        <Footer />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
