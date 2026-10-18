import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Chip,
  Stack,
  Snackbar,
  Alert,
  Tooltip,
  useTheme,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SendIcon from '@mui/icons-material/Send';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const quickTemplates = [
  {
    label: '💼 Job Opportunity',
    subject: 'Job Opportunity for Ced: Web Developer / IT Support',
    message: "Hi Ced, We reviewed your portfolio and would like to discuss an entry-level opportunity with our team.",
  },
  {
    label: '💻 Project Collaboration',
    subject: 'Inquiry: Web Development / System Project',
    message: "Hi Ced, I'd like to collaborate with you on a React.js / Fastify web application.",
  },
  {
    label: '🛠️ IT Consultation',
    subject: 'Inquiry: IT Support & System Setup',
    message: "Hi Ced, We have an office hardware setup and peripheral configuration task we'd like assistance with.",
  },
  {
    label: '👋 Quick Hello',
    subject: 'Connecting from your Portfolio',
    message: "Hi Ced, Great portfolio and projects! Let's connect.",
  },
];

export default function Contact() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setSnackbarMessage(`Copied ${portfolioData.contact.email} to clipboard!`);
    setSnackbarOpen(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const applyTemplate = (tmpl) => {
    setFormData((prev) => ({
      ...prev,
      subject: tmpl.subject,
      message: tmpl.message,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbarMessage('Please fill in your name, email, and message.');
      setSnackbarOpen(true);
      return;
    }

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.75 },
      });
    } catch (err) {
      // ignore if canvas unavailable
    }

    setSubmitted(true);
    setSnackbarMessage('Message prepared! Opening your mail client...');
    setSnackbarOpen(true);

    // Open mail client with prefilled parameters
    const mailtoLink = `mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 700);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
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
            LET'S WORK TOGETHER
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.8rem' },
              mb: 2,
            }}
          >
            Get In Touch
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
              maxWidth: 680,
              mx: 'auto',
              fontSize: '1.05rem',
            }}
          >
            Whether you have an entry-level opening, an IT support task, or a web development project in mind, my inbox is always open!
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Left Column: Direct Email Contact Card & Info */}
          <Grid item xs={12} md={5}>
            {/* Direct Email Card */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 3.5,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: isDark ? '#111827' : '#FFFFFF',
                mb: 3,
                boxShadow: isDark
                  ? '0 12px 30px -10px rgba(0, 0, 0, 0.5)'
                  : '0 12px 30px -10px rgba(0, 0, 0, 0.06)',
              }}
            >
              <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                DIRECT EMAIL ADDRESS
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.3rem', sm: '1.5rem' },
                  mt: 0.5,
                  mb: 1.5,
                  wordBreak: 'break-all',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: isDark ? '#F9FAFB' : '#1E293B',
                }}
              >
                {portfolioData.contact.email}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                Click below to instantly copy my email address or launch your preferred email application.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={copied ? <CheckCircleIcon /> : <ContentCopyIcon />}
                  onClick={handleCopyEmail}
                  sx={{ borderRadius: 2.5, fontWeight: 700, py: 1.1 }}
                >
                  {copied ? 'Copied to Clipboard!' : 'Copy Email'}
                </Button>

                <Button
                  variant="outlined"
                  color="inherit"
                  component="a"
                  href={`mailto:${portfolioData.contact.email}`}
                  startIcon={<OpenInNewIcon />}
                  sx={{ borderRadius: 2.5, fontWeight: 600, py: 1.1 }}
                >
                  Open Mail App
                </Button>
              </Stack>
            </Paper>

            {/* Quick Details Box */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: isDark ? 'rgba(17, 24, 39, 0.6)' : '#F8FAFC',
              }}
            >
              <Stack spacing={2.5}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <PlaceIcon sx={{ color: theme.palette.primary.main, mt: 0.3 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontWeight: 600 }}>
                      LOCATION
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {portfolioData.contact.location}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <AccessTimeIcon sx={{ color: '#10B981', mt: 0.3 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontWeight: 600 }}>
                      RESPONSE TIME
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {portfolioData.contact.responseTime}
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Right Column: Interactive Message Composer with Templates */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 3.5,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: isDark ? '#111827' : '#FFFFFF',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                Send a Message
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5 }}>
                Select a quick message template or compose your own note below:
              </Typography>

              {/* Quick Template Chips */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1, fontWeight: 600 }}>
                  QUICK TEMPLATES:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {quickTemplates.map((t, idx) => (
                    <Chip
                      key={idx}
                      label={t.label}
                      size="small"
                      onClick={() => applyTemplate(t)}
                      sx={{
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        '&:hover': {
                          backgroundColor: isDark ? 'rgba(99, 102, 241, 0.2)' : 'rgba(79, 70, 229, 0.1)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Form Inputs */}
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      placeholder="e.g. Job Opportunity / Project Inquiry"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={4}
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      placeholder="Type your message here..."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      startIcon={<SendIcon />}
                      sx={{ py: 1.3, borderRadius: 2.5, fontWeight: 700 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar Feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: '100%', borderRadius: 2.5, fontWeight: 600 }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

