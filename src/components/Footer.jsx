import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Button,
  useTheme,
  Divider,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TerminalIcon from '@mui/icons-material/Terminal';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      component="footer"
      sx={{
        py: 6,
        backgroundColor: isDark ? '#080C14' : '#F1F5F9',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
            mb: 4,
          }}
        >
          {/* Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
              }}
            >
              <TerminalIcon sx={{ fontSize: 18 }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              {portfolioData.personal.name}
              <Box component="span" sx={{ color: theme.palette.primary.main }}>
                .
              </Box>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
              • {portfolioData.personal.role}
            </Typography>
          </Box>

          {/* Nav links */}
          <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center">
            {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <Button
                key={item}
                onClick={() => scrollTo(item)}
                sx={{
                  color: 'text.secondary',
                  textTransform: 'capitalize',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  p: 0,
                  minWidth: 'auto',
                  '&:hover': { color: theme.palette.primary.main, backgroundColor: 'transparent' },
                }}
              >
                {item}
              </Button>
            ))}
          </Stack>

          {/* Back to top */}
          <Button
            size="small"
            variant="outlined"
            onClick={scrollToTop}
            startIcon={<KeyboardArrowUpIcon />}
            sx={{
              borderRadius: 2,
              color: 'text.secondary',
              borderColor: theme.palette.divider,
              fontSize: '0.8rem',
            }}
          >
            Back to Top
          </Button>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} {portfolioData.personal.name}. Built with React.js & Material UI (MUI).
          </Typography>

          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Optimized for seamless deployment on <strong>Vercel</strong> & <strong>GitHub Pages</strong>.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

