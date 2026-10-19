import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
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
  const isDark = mode === 'dark';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.default',
          backgroundImage: isDark
            ? 'radial-gradient(circle at 18% 12%, rgba(56, 189, 248, 0.10) 0%, transparent 45%), radial-gradient(circle at 82% 75%, rgba(99, 102, 241, 0.10) 0%, transparent 50%)'
            : 'radial-gradient(circle at 18% 12%, rgba(2, 132, 199, 0.12) 0%, transparent 45%), radial-gradient(circle at 82% 75%, rgba(37, 99, 235, 0.08) 0%, transparent 50%)',
          backgroundAttachment: 'fixed',
          color: 'text.primary',
          transition: 'background-color 0.35s ease, color 0.35s ease',
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
      <Analytics />
    </ThemeProvider>
  );
}