import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import TerminalIcon from '@mui/icons-material/Terminal';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ mode, onToggleMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled
            ? mode === 'dark'
              ? 'rgba(11, 15, 25, 0.85)'
              : 'rgba(255, 255, 255, 0.9)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled
            ? `1px solid ${theme.palette.divider}`
            : '1px solid transparent',
          transition: 'all 0.3s ease',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 74 } }}>
            {/* Logo / Brand */}
            <Box
              component="a"
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.2,
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: 2.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background:
                    mode === 'dark'
                      ? 'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)'
                      : 'linear-gradient(135deg, #4F46E5 0%, #0284C7 100%)',
                  color: '#fff',
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                }}
              >
                <TerminalIcon sx={{ fontSize: 22 }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  {portfolioData.personal.name}
                  <Box
                    component="span"
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: '1.2em',
                    }}
                  >
                    .
                  </Box>
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  Portfolio
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <Button
                    key={item.label}
                    onClick={(e) => scrollToSection(e, item.href)}
                    sx={{
                      color: isActive ? theme.palette.primary.main : 'text.primary',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.92rem',
                      px: 2,
                      py: 0.8,
                      position: 'relative',
                      borderRadius: 2,
                      backgroundColor: isActive
                        ? mode === 'dark'
                          ? 'rgba(99, 102, 241, 0.12)'
                          : 'rgba(79, 70, 229, 0.08)'
                        : 'transparent',
                      '&:hover': {
                        backgroundColor:
                          mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.06)'
                            : 'rgba(0, 0, 0, 0.04)',
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            {/* Actions: Theme Toggle & Quick CTA */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Tooltip title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                <IconButton
                  onClick={onToggleMode}
                  color="inherit"
                  sx={{
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    p: 1,
                    backgroundColor:
                      mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(0, 0, 0, 0.02)',
                    '&:hover': {
                      backgroundColor:
                        mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.06)',
                    },
                  }}
                >
                  {mode === 'dark' ? (
                    <LightModeOutlinedIcon sx={{ fontSize: 20, color: '#FBBF24' }} />
                  ) : (
                    <DarkModeOutlinedIcon sx={{ fontSize: 20, color: '#4B5563' }} />
                  )}
                </IconButton>
              </Tooltip>

              <Button
                variant="contained"
                color="primary"
                startIcon={<EmailOutlinedIcon />}
                onClick={(e) => scrollToSection(e, '#contact')}
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  borderRadius: 2.5,
                  fontSize: '0.88rem',
                  py: 0.9,
                  px: 2.2,
                }}
              >
                Hire Me
              </Button>

              {/* Mobile Hamburger Button */}
              <IconButton
                color="inherit"
                aria-label="open navigation drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  display: { md: 'none' },
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  p: 1,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: '80%',
            maxWidth: 320,
            p: 3,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6" fontWeight={700}>
            Navigation
          </Typography>
          <IconButton onClick={handleDrawerToggle} edge="end">
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ pt: 1 }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={(e) => scrollToSection(e, item.href)}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: isActive
                      ? mode === 'dark'
                        ? 'rgba(99, 102, 241, 0.15)'
                        : 'rgba(79, 70, 229, 0.1)'
                      : 'transparent',
                    color: isActive ? theme.palette.primary.main : 'text.primary',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '1.05rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ mt: 3, pt: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<EmailOutlinedIcon />}
            onClick={(e) => scrollToSection(e, '#contact')}
            sx={{ py: 1.2, borderRadius: 2 }}
          >
            Get In Touch
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

