import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Stack,
  useTheme,
  Button,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code: <CodeIcon sx={{ fontSize: 28 }} />,
  Build: <BuildIcon sx={{ fontSize: 28 }} />,
  Group: <GroupsIcon sx={{ fontSize: 28 }} />,
  Lightbulb: <LightbulbOutlinedIcon sx={{ fontSize: 28 }} />,
};

export default function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="about-details"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        backgroundColor: isDark ? 'rgba(17, 24, 39, 0.4)' : 'rgba(241, 245, 249, 0.5)',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
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
            DISCOVER MY BACKGROUND
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.8rem' },
              mb: 2,
            }}
          >
            About Me
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
              maxWidth: 780,
              mx: 'auto',
              fontSize: { xs: '1.05rem', md: '1.18rem' },
              lineHeight: 1.8,
              fontWeight: 400,
            }}
          >
            {portfolioData.personal.bio}
          </Typography>
        </Box>

        {/* 4 Core Pillar Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {portfolioData.aboutHighlights.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: isDark ? '#111827' : '#FFFFFF',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: theme.palette.primary.main,
                    boxShadow: isDark
                      ? '0 12px 24px -10px rgba(99, 102, 241, 0.3)'
                      : '0 12px 24px -10px rgba(79, 70, 229, 0.2)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    backgroundColor: isDark
                      ? 'rgba(99, 102, 241, 0.12)'
                      : 'rgba(79, 70, 229, 0.08)',
                    color: theme.palette.primary.main,
                  }}
                >
                  {iconMap[item.icon] || <CodeIcon />}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.05rem' }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', lineHeight: 1.6, flexGrow: 1 }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Quick Credentials / Profile Summary Box */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3.5,
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: isDark ? 'rgba(17, 24, 39, 0.8)' : '#FFFFFF',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                Entry-Level Readiness & Technical Capability
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.7 }}>
                Equipped with foundational web engineering skills, practical full-stack project experience, and solid computer hardware support knowledge gained during academic training and hands-on internship at Noveleta Training Center.
              </Typography>
              <Stack spacing={1.2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ fontSize: 18, color: '#10B981' }} />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Proven ability to build automated web systems (POS & Inventory, Student Enrollment)
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ fontSize: 18, color: '#10B981' }} />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Direct experience in workstation hardware diagnosis and peripheral installations
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <CheckCircleIcon sx={{ fontSize: 18, color: '#10B981' }} />
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Active collaborator enthusiastic about learning new enterprise frameworks & workflows
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2.5,
                  backgroundColor: isDark ? '#0B0F19' : '#F8FAFC',
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: 'text.secondary' }}>
                  CANDIDATE SNAPSHOT
                </Typography>
                <Stack spacing={1.8}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <SchoolOutlinedIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                        Education
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Recent Graduate in Computer Studies / IT
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <PlaceOutlinedIcon sx={{ color: theme.palette.secondary.main, fontSize: 20 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                        Location
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Cavite, Philippines (Open to On-Site / Hybrid / Remote)
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <WorkOutlineOutlinedIcon sx={{ color: '#10B981', fontSize: 20 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                        Desired Position
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Junior / Entry-Level Web Developer or IT Support Specialist
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

