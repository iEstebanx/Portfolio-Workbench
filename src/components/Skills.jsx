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
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import HardwareIcon from '@mui/icons-material/Hardware';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import { portfolioData } from '../data/portfolioData';
import Reveal from './Reveal';

const getCategoryIcon = (index) => {
  switch (index) {
    case 0:
      return <CodeIcon sx={{ fontSize: 24 }} />;
    case 1:
      return <StorageIcon sx={{ fontSize: 24 }} />;
    case 2:
      return <HardwareIcon sx={{ fontSize: 24 }} />;
    default:
      return <BuildOutlinedIcon sx={{ fontSize: 24 }} />;
  }
};

export default function Skills() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
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
            Tech Stack
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
            Technical{' '}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              Skills.
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
            The technologies, frameworks, and support skills I use to build software and deliver reliable solutions.
          </Typography>
        </Reveal>

        {/* Clean 4-Card Grid */}
        <Grid container spacing={3}>
          {portfolioData.skills.map((category, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <Reveal delay={index * 120} sx={{ height: '100%' }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 3.5 },
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
                  {/* Header: Icon & Category Title */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isDark
                          ? 'rgba(99, 102, 241, 0.12)'
                          : 'rgba(79, 70, 229, 0.08)',
                        color: theme.palette.primary.main,
                      }}
                    >
                      {getCategoryIcon(index)}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                      {category.title}
                    </Typography>
                  </Box>

                  {/* Skill Tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.tags.map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        sx={{
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          py: 2,
                          px: 0.5,
                          borderRadius: 2,
                          backgroundColor: isDark
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(0, 0, 0, 0.04)',
                          border: `1px solid ${theme.palette.divider}`,
                          color: 'text.primary',
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