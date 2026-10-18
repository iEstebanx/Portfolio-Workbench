import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Button,
  Stack,
  Divider,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LayersIcon from '@mui/icons-material/Layers';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { portfolioData } from '../data/portfolioData';
import QuscinaInteractiveSimulator from './QuscinaInteractiveSimulator';
import CaseStudyModal from './CaseStudyModal';

export default function Projects() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const primaryProject = portfolioData.projects[0];
  const otherProjects = portfolioData.projects.slice(1);

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        backgroundColor: isDark ? 'rgba(11, 15, 25, 0.5)' : 'rgba(248, 250, 252, 0.7)',
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
            SYSTEM DEVELOPMENT & CAPSTONE
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.8rem' },
              mb: 2,
            }}
          >
            Featured Projects
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
              maxWidth: 760,
              mx: 'auto',
              fontSize: '1.05rem',
            }}
          >
            Showcasing real-world enterprise web systems designed to eliminate manual paperwork, streamline inventory, and accelerate business operations.
          </Typography>
        </Box>

        {/* PRIMARY CAPSTONE PROJECT SHOWCASE */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4.5 },
            mb: 7,
            borderRadius: 4,
            border: isDark
              ? '1px solid rgba(99, 102, 241, 0.35)'
              : '1px solid rgba(79, 70, 229, 0.25)',
            background: isDark
              ? 'linear-gradient(180deg, rgba(17, 24, 39, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)'
              : 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
            boxShadow: isDark
              ? '0 20px 45px -15px rgba(0, 0, 0, 0.7), 0 0 20px rgba(99, 102, 241, 0.15)'
              : '0 20px 35px -15px rgba(79, 70, 229, 0.12)',
            position: 'relative',
          }}
        >
          {/* Header Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 1.5,
              mb: 2.5,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Chip
                icon={<AutoAwesomeIcon sx={{ fontSize: '15px !important' }} />}
                label={primaryProject.badge}
                color="primary"
                sx={{ fontWeight: 700, px: 0.5 }}
              />
              <Chip
                label="Kawit, Cavite"
                variant="outlined"
                sx={{ fontWeight: 600, borderColor: theme.palette.divider }}
              />
            </Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              {primaryProject.role}
            </Typography>
          </Box>

          {/* Project Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.5rem', sm: '1.9rem', md: '2.2rem' },
              mb: 1.5,
              lineHeight: 1.25,
            }}
          >
            {primaryProject.title}
          </Typography>

          {/* Client Subtitle */}
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              mb: 3,
            }}
          >
            {primaryProject.client}
          </Typography>

          {/* Narrative Summary */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              mb: 3.5,
              fontSize: { xs: '0.98rem', md: '1.05rem' },
            }}
          >
            {primaryProject.summary}
          </Typography>

          {/* Technology Badges */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
            {primaryProject.technologies.map((tech, idx) => (
              <Chip
                key={idx}
                label={tech}
                size="small"
                sx={{
                  fontWeight: 600,
                  backgroundColor: isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(79, 70, 229, 0.08)',
                  color: isDark ? '#A5B4FC' : '#4338CA',
                  border: isDark ? '1px solid rgba(99, 102, 241, 0.25)' : '1px solid rgba(79, 70, 229, 0.15)',
                }}
              />
            ))}
          </Box>

          {/* Embedded Interactive Simulator Box */}
          <Box sx={{ mb: 4 }}>
            <QuscinaInteractiveSimulator />
          </Box>

          {/* Footer CTAs for the primary project */}
          <Box
            sx={{
              pt: 2.5,
              borderTop: `1px solid ${theme.palette.divider}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Stack direction="row" spacing={1.5} flexWrap="wrap">
              <Button
                variant="contained"
                color="primary"
                startIcon={<LayersIcon />}
                onClick={() => handleOpenModal(primaryProject)}
                sx={{ fontWeight: 700 }}
              >
                View Full Architecture & Modules
              </Button>
            </Stack>

            <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
              *Interactive simulator demonstrates billing, receipt generation & stock deduction
            </Typography>
          </Box>
        </Paper>

        {/* ADDITIONAL INTERNSHIP PROJECTS */}
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <LayersIcon sx={{ color: theme.palette.secondary.main }} /> Additional Deployed Systems
        </Typography>

        <Grid container spacing={3}>
          {otherProjects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
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
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    transform: 'translateY(-4px)',
                    boxShadow: isDark
                      ? '0 12px 30px -10px rgba(0, 0, 0, 0.5)'
                      : '0 12px 30px -10px rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                {/* Badge & Timeline */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Chip
                    label={project.badge}
                    size="small"
                    color="secondary"
                    sx={{ fontWeight: 700, fontSize: '0.72rem' }}
                  />
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {project.timeline}
                  </Typography>
                </Box>

                {/* Title */}
                <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.25rem', mb: 1 }}>
                  {project.title}
                </Typography>

                {/* Client / Venue */}
                <Typography variant="caption" sx={{ color: theme.palette.primary.main, fontWeight: 700, mb: 2, display: 'block' }}>
                  {project.client}
                </Typography>

                {/* Summary */}
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2.5, flexGrow: 1 }}>
                  {project.summary}
                </Typography>

                {/* Key Metric Highlight */}
                {project.metrics && (
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: isDark ? '#161F30' : '#F1F5F9',
                      display: 'flex',
                      gap: 2,
                      mb: 2.5,
                    }}
                  >
                    {project.metrics.map((m, idx) => (
                      <Box key={idx}>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                          {m.label}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 800, color: '#10B981' }}>
                          {m.value}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}

                {/* Tech Badges */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 3 }}>
                  {project.technologies.map((t, idx) => (
                    <Chip key={idx} label={t} size="small" sx={{ fontSize: '0.72rem', fontWeight: 600 }} />
                  ))}
                </Box>

                {/* Action button */}
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleOpenModal(project)}
                  sx={{ borderRadius: 2, alignSelf: 'flex-start', fontWeight: 600 }}
                >
                  View Details & Modules
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        open={modalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </Box>
  );
}

