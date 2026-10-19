import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Stack,
  useTheme,
} from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { portfolioData } from '../data/portfolioData';
import Reveal from './Reveal';

export default function Experience() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const exp = portfolioData.experience[0];

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
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
            Career
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
            Work{' '}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              Experience.
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
            Hands-on technical experience delivering web applications and IT support.
          </Typography>
        </Reveal>

        {/* Experience Card */}
        <Reveal delay={100}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: 3.5,
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.background.card,
              maxWidth: 900,
              mx: 'auto',
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                mb: 2.5,
                gap: 1.5,
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 800,
                    fontSize: { xs: '1.25rem', md: '1.45rem' },
                  }}
                >
                  {exp.position}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    mt: 0.3,
                  }}
                >
                  {exp.company}
                </Typography>
              </Box>

              <Stack direction="row" spacing={1.2} flexWrap="wrap">
                <Chip
                  icon={<CalendarMonthOutlinedIcon sx={{ fontSize: 16, color: 'text.secondary !important' }} />}
                  label={exp.period}
                  size="small"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    borderRadius: 99,
                    backgroundColor: isDark
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(12, 26, 46, 0.06)',
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                />
              </Stack>
            </Box>

            {/* Duties list */}
            <Stack spacing={1.8} sx={{ mb: 3.5, mt: 3 }}>
              {exp.duties.map((duty, idx) => (
                <Reveal
                  key={idx}
                  delay={250 + idx * 120}
                  y={20}
                  sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}
                >
                  <CheckCircleOutlinedIcon
                    sx={{ fontSize: 20, color: theme.palette.primary.main, mt: 0.25, flexShrink: 0 }}
                  />
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.75, fontSize: '0.98rem' }}>
                    {duty}
                  </Typography>
                </Reveal>
              ))}
            </Stack>

            {/* Skills tags */}
            <Box
              sx={{
                pt: 2.5,
                borderTop: `1px solid ${theme.palette.divider}`,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              {exp.tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  sx={{
                    fontSize: '0.8rem',
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
      </Container>
    </Box>
  );
}
