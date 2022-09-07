import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '../themes/theme';

import Header from './Header/Header';
import Contact from './pages/Contact/Contact';
import Experience from './pages/Experience';
import Introduction from './pages/Introduction';
import Skills from './pages/Skills';
import Footer from './Footer';

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Header />
        <Introduction />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
