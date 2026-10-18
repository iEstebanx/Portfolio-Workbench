import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { getAppTheme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme-mode');
    return saved ? saved : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme-mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.default',
          color: 'text.primary',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        <Navbar mode={mode} onToggleMode={toggleMode} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
