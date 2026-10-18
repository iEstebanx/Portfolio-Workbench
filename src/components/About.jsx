import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  Stack,
  useTheme,
} from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { portfolioData } from '../data/portfolioData';
import Reveal from './Reveal';

export default function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.015)' : 'rgba(0, 0, 0, 0.015)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          {/* Left Column: Who I Am */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
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
              Who I am
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 3,
                letterSpacing: '-0.02em',
              }}
            >
              About{' '}
              <Box component="span" sx={{ color: theme.palette.primary.main }}>
                Me.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1.02rem', md: '1.12rem' },
                lineHeight: 1.85,
                mb: 3,
              }}
            >
              {portfolioData.personal.bio}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
              }}
            >
              With practical experience developing full-stack web applications like Point of Sale & Inventory systems, automated student enrollment forms, and venue reservation management, alongside hands-on workstation troubleshooting and peripheral setup, I bring a reliable and versatile technical foundation to any team.
            </Typography>
            </Reveal>
          </Grid>

          {/* Right Column: Clean Profile Details Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={150} sx={{ height: '100%' }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                borderRadius: 3.5,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: isDark ? '#111827' : '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  mb: 3,
                }}
              >
                Profile Overview
              </Typography>

              <Stack spacing={2.5}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <SchoolOutlinedIcon sx={{ color: theme.palette.primary.main, fontSize: 22, mt: 0.3 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      Education
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Recent Graduate in Computer Studies / IT
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ borderColor: theme.palette.divider }} />

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <WorkOutlineOutlinedIcon sx={{ color: theme.palette.secondary.main, fontSize: 22, mt: 0.3 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      Focus Areas
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Web Development (React, Fastify) & IT Support
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ borderColor: theme.palette.divider }} />

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <PlaceOutlinedIcon sx={{ color: '#10B981', fontSize: 22, mt: 0.3 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      Location
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Cavite, Philippines
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ borderColor: theme.palette.divider }} />

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <EmailOutlinedIcon sx={{ color: '#F59E0B', fontSize: 22, mt: 0.3 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      Contact Email
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>
                      {portfolioData.personal.email}
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Paper>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
