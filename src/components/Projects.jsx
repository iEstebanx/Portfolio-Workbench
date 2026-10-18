import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  useTheme,
} from '@mui/material';
import { portfolioData } from '../data/portfolioData';
import Reveal from './Reveal';

export default function Projects() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.015)' : 'rgba(0, 0, 0, 0.015)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Reveal sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              letterSpacing: '0.12em',
              fontSize: '0.85rem',
              display: 'block',
              mb: 1,
            }}
          >
            Project
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 1.5,
              letterSpacing: '-0.02em',
            }}
          >
            Selected{' '}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              Works.
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              fontSize: '1.02rem',
            }}
          >
            A curated set of web applications and system solutions.
          </Typography>
        </Reveal>

        {/* Projects Grid */}
        <Grid container spacing={3} alignItems="stretch">
          {portfolioData.projects.map((project, index) => (
            <Grid
              size={{ xs: 12, md: project.id === 'quscina-pos' ? 12 : 6 }}
              key={project.id}
            >
              <Reveal delay={index === 0 ? 0 : (index - 1) * 150} sx={{ height: '100%' }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  borderRadius: 3.5,
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: isDark ? '#111827' : '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                {/* Top: Status & Category */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <Chip
                    label={project.status}
                    size="small"
                    color={project.id === 'quscina-pos' ? 'primary' : 'default'}
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      borderRadius: 1.5,
                    }}
                  />
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    {project.category}
                  </Typography>
                </Box>

                {/* Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1.25rem', md: '1.45rem' },
                    lineHeight: 1.35,
                    mb: 2,
                  }}
                >
                  {project.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 3,
                    flexGrow: 1,
                    fontSize: '0.95rem',
                  }}
                >
                  {project.description}
                </Typography>

                {/* Tech Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, pt: 1, borderTop: `1px solid ${theme.palette.divider}` }}>
                  {project.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      size="small"
                      sx={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        borderRadius: 1.5,
                        backgroundColor: isDark
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(0, 0, 0, 0.04)',
                        border: `1px solid ${theme.palette.divider}`,
                      }}
                    />
                  ))}
                </Box>
              </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
