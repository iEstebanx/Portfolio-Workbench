import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SendIcon from '@mui/icons-material/Send';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { portfolioData } from '../data/portfolioData';
import Reveal from './Reveal';

export default function Contact() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setSnackbarOpen(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: isDark ? 'rgba(9, 17, 32, 0.5)' : 'rgba(210, 224, 239, 0.45)',
      }}
    >
      <Container maxWidth="md">
        {/* Section Header */}
        <Reveal sx={{ textAlign: 'center', mb: { xs: 5, md: 6 } }}>
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
            Contact
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
            Have an opportunity or project?{' '}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              Let's talk.
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 550,
              mx: 'auto',
              fontSize: '1.02rem',
              mb: 3,
            }}
          >
            Feel free to reach out directly via email or send a message using the form below.
          </Typography>

          {/* Quick Email Pill & Copy Button */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              p: 1,
              pl: 2.5,
              borderRadius: 99,
              backgroundColor: theme.palette.background.card,
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <EmailOutlinedIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                color: 'text.primary',
              }}
            >
              {portfolioData.personal.email}
            </Typography>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleCopyEmail}
              startIcon={copied ? <CheckCircleIcon sx={{ fontSize: 16 }} /> : <ContentCopyIcon sx={{ fontSize: 16 }} />}
              sx={{ borderRadius: 99, fontSize: '0.78rem', py: 0.6, px: 1.8 }}
            >
              {copied ? 'Copied' : 'Copy'}
            </Button>
          </Box>
        </Reveal>

        {/* Clean Contact Form */}
        <Reveal delay={150}>
          <Paper
            elevation={0}
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: { xs: 3, sm: 4.5 },
              borderRadius: 3.5,
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.background.card,
              maxWidth: 640,
              mx: 'auto',
            }}
          >
            <Stack spacing={2.5}>
              <TextField
                required
                fullWidth
                label="Name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
              />

              <TextField
                required
                fullWidth
                type="email"
                label="Email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />

              <TextField
                required
                fullWidth
                multiline
                rows={4}
                label="Message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                startIcon={<SendIcon />}
                sx={{
                  py: 1.5,
                  borderRadius: 2.5,
                  fontWeight: 700,
                  fontSize: '1rem',
                }}
              >
                Send Message
              </Button>
            </Stack>
          </Paper>
        </Reveal>
      </Container>

      {/* Copy Toast */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: '100%', borderRadius: 2.5, fontWeight: 600 }}
        >
          Email address copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
}