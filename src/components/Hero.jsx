import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Chip,
  Stack,
  useTheme,
  Tooltip,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';
import { portfolioData } from '../data/portfolioData';

const terminalCommands = [
  {
    cmd: 'cat introduction.txt',
    output:
      'A motivated and responsible recent graduate seeking an entry-level position where I can apply my computer skills & deliver reliable technical solutions.',
  },
  {
    cmd: 'whoami --skills',
    output:
      'React.js, Material UI, Tailwind, Node.js, Fastify, Hardware Diagnostics, Peripheral Setup & Maintenance.',
  },
  {
    cmd: 'sys.status --deployment',
    output:
      'Status: Ready for Hire | Location: Cavite, Philippines | Vercel & GitHub Ready.',
  },
];

const roles = [
  'Full-Stack Web Developer',
  'Frontend Specialist (React & MUI)',
  'IT Support & Hardware Troubleshooter',
  'Recent Computer Studies Graduate',
];

export default function Hero({ onOpenContact }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [roleIndex, setRoleIndex] = useState(0);
  const [activeCmdIndex, setActiveCmdIndex] = useState(0);
  const [copiedTerminal, setCopiedTerminal] = useState(false);

  // Rotating roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyCmd = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedTerminal(true);
    setTimeout(() => setCopiedTerminal(false), 2000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="about"
      sx={{
        pt: { xs: 14, md: 18 },
        pb: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background: isDark
          ? 'radial-gradient(circle at 15% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(6, 182, 212, 0.12) 0%, transparent 40%)'
          : 'radial-gradient(circle at 15% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 40%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
          {/* Left Column: Greeting, Role, Intro, Actions */}
          <Grid item xs={12} md={7}>
            {/* Status Pill */}
            <Box sx={{ mb: 2.5 }}>
              <Chip
                icon={
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                      boxShadow: '0 0 10px #10B981',
                      ml: 1,
                    }}
                  />
                }
                label={portfolioData.personal.availability}
                variant="outlined"
                sx={{
                  borderColor: isDark ? 'rgba(16, 185, 129, 0.4)' : 'rgba(16, 185, 129, 0.5)',
                  backgroundColor: isDark ? 'rgba(16, 185, 129, 0.08)' : 'rgba(16, 185, 129, 0.05)',
                  color: isDark ? '#34D399' : '#065F46',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  py: 1,
                  px: 0.5,
                }}
              />
            </Box>

            {/* Main Headline */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.4rem', md: '4rem' },
                fontWeight: 800,
                lineHeight: 1.15,
                mb: 1.5,
              }}
            >
              Hi, I'm{' '}
              <Box
                component="span"
                sx={{
                  background: isDark
                    ? 'linear-gradient(135deg, #818CF8 0%, #38BDF8 100%)'
                    : 'linear-gradient(135deg, #4F46E5 0%, #0284C7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {portfolioData.personal.name}
              </Box>
            </Typography>

            {/* Rotating Role Badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 3,
                minHeight: 40,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  fontSize: { xs: '1.15rem', sm: '1.45rem' },
                }}
              >
                {roles[roleIndex]}
              </Typography>
            </Box>

            {/* About Narrative Verbatim */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', sm: '1.12rem' },
                color: 'text.secondary',
                mb: 4,
                maxWidth: 620,
                lineHeight: 1.75,
              }}
            >
              {portfolioData.personal.bio}
            </Typography>

            {/* Call To Actions */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 5 }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<CodeIcon />}
                onClick={() => scrollTo('projects')}
                sx={{
                  px: 3.5,
                  py: 1.4,
                  fontSize: '1rem',
                  fontWeight: 700,
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                color="inherit"
                size="large"
                startIcon={<EmailIcon />}
                onClick={() => scrollTo('contact')}
                sx={{
                  px: 3,
                  py: 1.4,
                  fontSize: '1rem',
                  fontWeight: 600,
                }}
              >
                Get in Touch
              </Button>
            </Stack>

            {/* Key Quick Stats */}
            <Grid container spacing={2} sx={{ maxWidth: 560 }}>
              {portfolioData.personal.stats.map((stat, idx) => (
                <Grid item xs={6} sm={3} key={idx}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 1.8,
                      borderRadius: 2.5,
                      border: `1px solid ${theme.palette.divider}`,
                      backgroundColor: isDark
                        ? 'rgba(17, 24, 39, 0.6)'
                        : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(8px)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        color: theme.palette.primary.main,
                        fontSize: '1.1rem',
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        display: 'block',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Column: Interactive Terminal & System Inspector (No personal image needed) */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={isDark ? 8 : 4}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                border: isDark
                  ? '1px solid rgba(255, 255, 255, 0.12)'
                  : '1px solid rgba(0, 0, 0, 0.08)',
                backgroundColor: isDark ? '#0D1117' : '#1E293B',
                color: '#F1F5F9',
                boxShadow: isDark
                  ? '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px rgba(99, 102, 241, 0.15)'
                  : '0 20px 35px -10px rgba(15, 23, 42, 0.25)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Terminal Window Header Bar */}
              <Box
                sx={{
                  px: 2.5,
                  py: 1.6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: isDark ? '#161B22' : '#0F172A',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#EF4444' }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#10B981' }} />
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: '#94A3B8',
                    fontSize: '0.8rem',
                    letterSpacing: '0.04em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.8,
                  }}
                >
                  <TerminalIcon sx={{ fontSize: 16, color: '#38BDF8' }} />
                  ced@dev-station: ~/portfolio
                </Typography>
                <Tooltip title={copiedTerminal ? 'Copied command!' : 'Copy active command'}>
                  <Box
                    component="button"
                    onClick={() => handleCopyCmd(terminalCommands[activeCmdIndex].cmd)}
                    sx={{
                      background: 'none',
                      border: 'none',
                      color: '#94A3B8',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      p: 0.5,
                      borderRadius: 1,
                      '&:hover': { color: '#F8FAFC', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                    }}
                  >
                    {copiedTerminal ? (
                      <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: '#10B981' }} />
                    ) : (
                      <ContentCopyIcon sx={{ fontSize: 16 }} />
                    )}
                  </Box>
                </Tooltip>
              </Box>

              {/* Terminal Command Selector Pills */}
              <Box
                sx={{
                  p: 2,
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  backgroundColor: isDark ? '#0D1117' : '#1E293B',
                  borderBottom: '1px dashed rgba(255, 255, 255, 0.1)',
                }}
              >
                {terminalCommands.map((item, idx) => (
                  <Chip
                    key={idx}
                    label={`$ ${item.cmd.split(' ')[0]}`}
                    size="small"
                    onClick={() => setActiveCmdIndex(idx)}
                    sx={{
                      cursor: 'pointer',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor:
                        activeCmdIndex === idx ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      color: activeCmdIndex === idx ? '#38BDF8' : '#94A3B8',
                      border:
                        activeCmdIndex === idx
                          ? '1px solid rgba(56, 189, 248, 0.5)'
                          : '1px solid rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(56, 189, 248, 0.25)',
                      },
                    }}
                  />
                ))}
              </Box>

              {/* Terminal Interactive Body */}
              <Box
                sx={{
                  p: 3,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  minHeight: 230,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  {/* Prompt Line */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <Typography
                      component="span"
                      sx={{
                        color: '#10B981',
                        fontWeight: 700,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      ➜
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        color: '#38BDF8',
                        fontWeight: 600,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      ~/portfolio
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        color: '#F8FAFC',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      $ {terminalCommands[activeCmdIndex].cmd}
                    </Typography>
                  </Box>

                  {/* Output Line */}
                  <Box
                    sx={{
                      pl: 2.5,
                      borderLeft: '2px solid rgba(56, 189, 248, 0.4)',
                      color: '#CBD5E1',
                      py: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.86rem',
                        fontFamily: "'JetBrains Mono', monospace",
                        color: '#E2E8F0',
                      }}
                    >
                      {terminalCommands[activeCmdIndex].output}
                    </Typography>
                  </Box>
                </Box>

                {/* Simulated Live System Status Bar */}
                <Box
                  sx={{
                    mt: 3,
                    pt: 2,
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 1,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                    <MemoryIcon sx={{ fontSize: 16, color: '#F59E0B' }} />
                    <Typography
                      variant="caption"
                      sx={{ color: '#94A3B8', fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      IT Support: Online
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                    <StorageIcon sx={{ fontSize: 16, color: '#38BDF8' }} />
                    <Typography
                      variant="caption"
                      sx={{ color: '#94A3B8', fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Stack: React + MUI
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                    <PlayArrowIcon sx={{ fontSize: 16, color: '#10B981' }} />
                    <Typography
                      variant="caption"
                      sx={{ color: '#10B981', fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Vercel Ready
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

