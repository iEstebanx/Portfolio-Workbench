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
  const isDark = mode === 'dark';

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
        color="transparent"
        elevation={0}
        sx={{
          color: 'text.primary',
          backgroundColor: scrolled
            ? isDark
              ? 'rgba(5, 11, 22, 0.85)'
              : 'rgba(215, 228, 242, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled
            ? `1px solid ${theme.palette.divider}`
            : '1px solid transparent',
          transition: 'all 0.3s ease',
          zIndex: (t) => t.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 74 } }}>
            {/* Logo / Brand */}
            <Box
              component="a"
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.4,
                textDecoration: 'none',
                color: 'text.primary',
                cursor: 'pointer',
              }}
            >
              {/* Standalone "CA" Geometric Symbol - No Circle */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 38,
                  height: 38,
                  flexShrink: 0,
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.08)',
                  },
                }}
              >
                <svg
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: '100%', height: '100%', overflow: 'visible' }}
                >
                  <defs>
                    <linearGradient id="ca-brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0284C7" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>

                  {/* "C" Bracket */}
                  <path
                    d="M 16 8 L 5 19 L 16 30"
                    stroke={isDark ? '#38BDF8' : 'url(#ca-brand-grad)'}
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* "A" Chevron */}
                  <path
                    d="M 22 30 L 29 8 L 36 30"
                    stroke={isDark ? '#0284C7' : '#1D4ED8'}
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* "A" Crossbar */}
                  <line
                    x1="24.5"
                    y1="22.5"
                    x2="33.5"
                    y2="22.5"
                    stroke={isDark ? '#0284C7' : '#1D4ED8'}
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}
                >
                  {portfolioData.personal.name}
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Pill Bar */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
                p: 0.6,
                borderRadius: 99,
                backgroundColor: isDark
                  ? 'rgba(12, 21, 39, 0.72)'
                  : 'rgba(237, 243, 250, 0.78)',
                border: `1px solid ${theme.palette.divider}`,
                backdropFilter: 'blur(12px)',
              }}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <Button
                    key={item.label}
                    onClick={(e) => scrollToSection(e, item.href)}
                    sx={{
                      color: isActive ? 'text.primary' : 'text.secondary',
                      fontWeight: isActive ? 700 : 600,
                      fontSize: '0.88rem',
                      px: 2.2,
                      py: 0.7,
                      borderRadius: 99,
                      backgroundColor: isActive
                        ? theme.palette.background.tag
                        : 'transparent',
                      border: isActive
                        ? `1px solid ${theme.palette.background.tagBorder}`
                        : '1px solid transparent',
                      '&:hover': {
                        backgroundColor: theme.palette.background.tag,
                        color: 'text.primary',
                        transform: 'none',
                        boxShadow: 'none',
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
              <Tooltip title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                <IconButton
                  onClick={onToggleMode}
                  sx={{
                    color: 'text.primary',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2.5,
                    p: 1,
                    backgroundColor: isDark
                      ? 'rgba(12, 21, 39, 0.75)'
                      : 'rgba(237, 243, 250, 0.85)',
                    '&:hover': {
                      backgroundColor: theme.palette.background.tag,
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                >
                  {isDark ? (
                    <LightModeOutlinedIcon sx={{ fontSize: 20, color: '#FBBF24' }} />
                  ) : (
                    <DarkModeOutlinedIcon sx={{ fontSize: 20, color: '#0369A1' }} />
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
                aria-label="open navigation drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: 'text.primary',
                  display: { md: 'none' },
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  p: 1,
                  backgroundColor: isDark
                    ? 'rgba(12, 21, 39, 0.75)'
                    : 'rgba(237, 243, 250, 0.85)',
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
            color: 'text.primary',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6" fontWeight={700} color="text.primary">
            Navigation
          </Typography>
          <IconButton onClick={handleDrawerToggle} edge="end" sx={{ color: 'text.primary' }}>
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
                      ? theme.palette.background.tag
                      : 'transparent',
                    color: isActive ? theme.palette.primary.main : 'text.primary',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 600,
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
