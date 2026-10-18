import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Grid,
  Stack,
  Divider,
  useTheme,
  Button,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const exp = portfolioData.experience[0];

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
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: isDark ? 'rgba(17, 24, 39, 0.3)' : 'rgba(241, 245, 249, 0.4)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 800,
              letterSpacing: '0.12em',
              fontSize: '0.85rem',
              display: 'block',
              mb: 1,
            }}
          >
            CAREER & INTERNSHIP HISTORY
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.8rem' },
              mb: 2,
            }}
          >
            Work Experience
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              borderRadius: 2,
              backgroundColor: theme.palette.primary.main,
              mx: 'auto',
              mb: 3,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 720,
              mx: 'auto',
              fontSize: '1.05rem',
            }}
          >
            Hands-on professional experience applying computer skills to real organizational operations in Noveleta, Cavite.
          </Typography>
        </Box>

        {/* Experience Timeline Card */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: 4,
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: isDark ? '#111827' : '#FFFFFF',
            position: 'relative',
            boxShadow: isDark
              ? '0 15px 35px -10px rgba(0, 0, 0, 0.6)'
              : '0 15px 35px -10px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* Top Line: Company, Role, Period */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'center' },
              mb: 3,
              gap: 2,
            }}
          >
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.8, flexWrap: 'wrap' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, fontSize: { xs: '1.3rem', md: '1.6rem' } }}>
                  {exp.position}
                </Typography>
                <Chip
                  label={exp.type}
                  size="small"
                  color="primary"
                  sx={{ fontWeight: 700, borderRadius: 2 }}
                />
              </Box>

              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.8,
                }}
              >
                {exp.company}
              </Typography>
            </Box>

            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Chip
                icon={<CalendarMonthIcon sx={{ fontSize: 16 }} />}
                label={exp.period}
                variant="outlined"
                sx={{ fontWeight: 600, borderColor: theme.palette.divider }}
              />
              <Chip
                icon={<PlaceIcon sx={{ fontSize: 16 }} />}
                label={exp.location}
                variant="outlined"
                sx={{ fontWeight: 600, borderColor: theme.palette.divider }}
              />
            </Stack>
          </Box>

          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3.5, lineHeight: 1.75 }}>
            {exp.description}
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Key Deliverables & Responsibilities */}
          <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Key Contributions & Core Duties:
          </Typography>

          <Grid container spacing={2} sx={{ mb: 4 }}>
            {exp.duties.map((duty, idx) => (
              <Grid item xs={12} key={idx}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    p: 1.8,
                    borderRadius: 2.5,
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 20, color: '#10B981', mt: 0.2, flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ lineHeight: 1.7, fontWeight: 500 }}>
                    {duty}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Technologies & Domain Competencies */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, display: 'block', mb: 1.2 }}>
              COMPETENCIES APPLIED ON THE JOB:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {exp.skillsUsed.map((skill, idx) => (
                <Chip
                  key={idx}
                  label={skill}
                  size="small"
                  sx={{
                    fontWeight: 600,
                    backgroundColor: isDark ? 'rgba(99, 102, 241, 0.12)' : 'rgba(79, 70, 229, 0.08)',
                    color: isDark ? '#A5B4FC' : '#4338CA',
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Quick links to the systems */}
          <Box
            sx={{
              pt: 3,
              borderTop: `1px solid ${theme.palette.divider}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Want to inspect the software created during this tenure?
            </Typography>
            <Button
              variant="outlined"
              size="small"
              startIcon={<CodeIcon />}
              onClick={() => scrollTo('projects')}
              sx={{ borderRadius: 2, fontWeight: 600 }}
            >
              See Internship Systems
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

