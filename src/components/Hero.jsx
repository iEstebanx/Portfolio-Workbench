import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CodeIcon from '@mui/icons-material/Code';
import { portfolioData } from '../data/portfolioData';

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
        {/* Location / Status Eyebrow */}
        <Typography
          variant="overline"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
            letterSpacing: '0.15em',
            fontSize: '0.85rem',
            display: 'inline-block',
            mb: 2,
            px: 2,
            py: 0.5,
            borderRadius: 5,
            backgroundColor: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(79, 70, 229, 0.08)',
            border: `1px solid ${isDark ? 'rgba(99, 102, 241, 0.25)' : 'rgba(79, 70, 229, 0.2)'}`,
          }}
        >
          {portfolioData.personal.location}
        </Typography>

        {/* Hero Name Headline */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.8rem', sm: '4rem', md: '4.8rem' },
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            mb: 2,
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
          .
        </Typography>

        {/* Role Subtitle */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: 'text.secondary',
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            mb: 3,
          }}
        >
          {portfolioData.personal.role}
        </Typography>

        {/* About summary narrative */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.15rem' },
            color: 'text.secondary',
            maxWidth: 680,
            mx: 'auto',
            lineHeight: 1.8,
            mb: 5,
          }}
        >
          {portfolioData.personal.bio}
        </Typography>

        {/* Action Buttons */}
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
              borderRadius: 2.5,
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            View Projects
          </Button>

          <Button
            variant="outlined"
            color="inherit"
            size="large"
            startIcon={<EmailOutlinedIcon />}
            onClick={() => scrollTo('contact')}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: 2.5,
              borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            Get in Touch
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
