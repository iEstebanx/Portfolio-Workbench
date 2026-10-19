import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CodeIcon from '@mui/icons-material/Code';
import { portfolioData } from '../data/portfolioData';
import Reveal from './Reveal';

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        pt: { xs: 16, md: 22 },
        pb: { xs: 10, md: 16 },
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        {/* Hero Name Headline */}
        <Reveal delay={0}>
          <Typography
            variant="h1"
            sx={{
              color: 'text.primary',
              fontSize: { xs: '2.8rem', sm: '4rem', md: '4.8rem' },
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              mb: 2,
            }}
          >
            I'm{' '}
            <Box
              component="span"
              sx={{
                background: isDark
                  ? 'linear-gradient(135deg, #7DD3FC 0%, #38BDF8 50%, #818CF8 100%)'
                  : 'linear-gradient(135deg, #0369A1 0%, #0284C7 55%, #1D4ED8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {portfolioData.personal.name}
            </Box>
            .
          </Typography>
        </Reveal>

        {/* Role Subtitle */}
        <Reveal delay={240}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: isDark ? '#BAE6FD' : '#13355A',
              fontSize: { xs: '1.15rem', sm: '1.45rem' },
              letterSpacing: '0.02em',
              mb: 3,
            }}
          >
            {portfolioData.personal.role}
          </Typography>
        </Reveal>

        {/* About summary narrative */}
        <Reveal delay={360}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', sm: '1.12rem' },
              color: 'text.secondary',
              maxWidth: 680,
              mx: 'auto',
              lineHeight: 1.8,
              mb: 5,
            }}
          >
            {portfolioData.personal.bio}
          </Typography>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={480}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<CodeIcon />}
              onClick={() => scrollTo('projects')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: 3,
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              View Projects
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<EmailOutlinedIcon />}
              onClick={() => scrollTo('contact')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 3,
                color: 'text.primary',
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              Get in Touch
            </Button>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  );
}
