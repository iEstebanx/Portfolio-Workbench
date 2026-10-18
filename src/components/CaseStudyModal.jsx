import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  Grid,
  Chip,
  Divider,
  Stack,
  useTheme,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import InsightsIcon from '@mui/icons-material/Insights';
import DnsIcon from '@mui/icons-material/Dns';

export default function CaseStudyModal({ open, onClose, project }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      PaperProps={{
        sx: {
          borderRadius: 3.5,
          backgroundColor: isDark ? '#111827' : '#FFFFFF',
          backgroundImage: 'none',
        },
      }}
    >
      <DialogTitle
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box>
          <Chip
            label={project.badge || 'Case Study'}
            size="small"
            color="primary"
            sx={{ fontWeight: 700, mb: 1 }}
          />
          <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: '-0.01em' }}>
            {project.title}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {project.client} • {project.role}
          </Typography>
        </Box>
        <IconButton onClick={onClose} edge="end">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
        {/* Project Background / Study Context */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
            <InsightsIcon sx={{ color: theme.palette.primary.main }} /> Project Background & Context
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            {project.summary}
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Modules Breakdown */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsSuggestIcon sx={{ color: theme.palette.secondary.main }} /> Integrated System Modules
          </Typography>
          <Grid container spacing={2}>
            {project.modules?.map((mod, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2.5,
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: isDark ? '#161F30' : '#F8FAFC',
                    height: '100%',
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 0.5 }}>
                    {idx + 1}. {mod.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    {mod.detail}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Technical Architecture & Stack */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <DnsIcon sx={{ color: '#10B981' }} /> Technology Stack & Implementation
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2.5 }}>
            {project.technologies?.map((tech, idx) => (
              <Chip
                key={idx}
                label={tech}
                variant="outlined"
                sx={{
                  fontWeight: 600,
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                }}
              />
            ))}
          </Stack>

          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
            Built using modern component-driven React.js with Material UI (MUI) design system for rapid, accessible UI creation. The backend architecture leverages Node.js with Fastify for lightweight REST endpoints handling menu updates, billing records, and automated inventory reconciliation.
          </Typography>
        </Box>

        {/* Results & Key Highlights */}
        {project.highlights && (
          <Box sx={{ mt: 3, p: 2.5, borderRadius: 2.5, backgroundColor: isDark ? '#0B0F19' : '#F1F5F9' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
              Operational Impact & Results:
            </Typography>
            <Stack spacing={1}>
              {project.highlights.map((h, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: '#10B981' }} />
                  <Typography variant="body2">{h}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 2.5, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Button variant="contained" onClick={onClose} sx={{ borderRadius: 2 }}>
          Close Case Study
        </Button>
      </DialogActions>
    </Dialog>
  );
}

