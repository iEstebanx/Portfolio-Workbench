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
        backgroundColor: isDark ? 'rgba(9, 17, 32, 0.5)' : 'rgba(210, 224, 239, 0.45)',
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
              letterSpacing: '0.15em',
              fontSize: '0.82rem',
              display: 'block',
              mb: 1,
            }}
          >
            Project
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: 'text.primary',
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
                    backgroundColor: theme.palette.background.card,
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.25s ease, border-color 0.25s ease',
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
                      icon={
                        <Box
                          sx={{
                            width: 7,
                            height: 7,
                            borderRadius: '50%',
                            backgroundColor: '#10B981',
                            boxShadow: '0 0 8px #10B981',
                            ml: 1,
                          }}
                        />
                      }
                      label={project.status}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.74rem',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        borderRadius: 99,
                        color: 'text.primary',
                        backgroundColor: isDark
                          ? 'rgba(255, 255, 255, 0.06)'
                          : 'rgba(12, 26, 46, 0.07)',
                        border: `1px solid ${theme.palette.divider}`,
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {project.category}
                    </Typography>
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.primary',
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
                      fontSize: '0.96rem',
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Tech Tags */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 0.8,
                      pt: 2,
                      borderTop: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        size="small"
                        sx={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          borderRadius: 99,
                          backgroundColor: theme.palette.background.tag,
                          border: `1px solid ${theme.palette.background.tagBorder}`,
                          color: theme.palette.background.tagText,
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
