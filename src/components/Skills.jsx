import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  Chip,
  TextField,
  InputAdornment,
  LinearProgress,
  Stack,
  useTheme,
  Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import HardwareIcon from '@mui/icons-material/Hardware';
import WebIcon from '@mui/icons-material/Web';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarsIcon from '@mui/icons-material/Stars';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleCategoryChange = (event, newValue) => {
    setActiveCategory(newValue);
  };

  const filteredSkills = portfolioData.skills.filter((skill) => {
    const matchesCategory =
      activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'frontend':
        return <CodeIcon sx={{ fontSize: 18 }} />;
      case 'backend':
        return <StorageIcon sx={{ fontSize: 18 }} />;
      case 'it-hardware':
        return <HardwareIcon sx={{ fontSize: 18 }} />;
      default:
        return <WebIcon sx={{ fontSize: 18 }} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'frontend':
        return theme.palette.primary.main;
      case 'backend':
        return theme.palette.secondary.main;
      case 'it-hardware':
        return '#10B981';
      default:
        return '#F59E0B';
    }
  };

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
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
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
            TECHNICAL PROFICIENCY
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.8rem' },
              mb: 2,
            }}
          >
            Technical Skills
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
              maxWidth: 720,
              mx: 'auto',
              fontSize: '1.05rem',
            }}
          >
            Combining modern frontend frameworks, backend API fundamentals, and reliable hands-on computer hardware & peripheral support.
          </Typography>
        </Box>

        {/* Interactive Filters: Categories & Search Bar */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 5,
            borderRadius: 3,
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: isDark ? 'rgba(17, 24, 39, 0.6)' : '#FFFFFF',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          {/* Category Tabs */}
          <Tabs
            value={activeCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.primary.main,
                height: 3,
                borderRadius: 1.5,
              },
              '& .MuiTab-root': {
                fontWeight: 600,
                fontSize: '0.9rem',
                minWidth: 'auto',
                px: 2,
                py: 1,
                borderRadius: 2,
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: theme.palette.primary.main,
                },
              },
            }}
          >
            {portfolioData.skillCategories.map((cat) => (
              <Tab key={cat.id} label={cat.label} value={cat.id} />
            ))}
          </Tabs>

          {/* Search Box */}
          <TextField
            size="small"
            placeholder="Search skills (e.g., React, Fastify)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              width: { xs: '100%', md: 280 },
              '& .MuiOutlinedInput-root': {
                borderRadius: 2.5,
                backgroundColor: isDark ? 'rgba(11, 15, 25, 0.7)' : 'rgba(241, 245, 249, 0.7)',
              },
            }}
          />
        </Paper>

        {/* Skills Grid */}
        <Grid container spacing={2.5}>
          {filteredSkills.map((skill, index) => {
            const isSelected = selectedSkill?.name === skill.name;
            const categoryColor = getCategoryColor(skill.category);

            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={0}
                  onClick={() => setSelectedSkill(isSelected ? null : skill)}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 3,
                    border: isSelected
                      ? `2px solid ${categoryColor}`
                      : `1px solid ${theme.palette.divider}`,
                    backgroundColor: isDark ? '#111827' : '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: categoryColor,
                      boxShadow: isDark
                        ? `0 10px 25px -8px ${categoryColor}33`
                        : '0 10px 25px -8px rgba(0, 0, 0, 0.12)',
                    },
                  }}
                >
                  {/* Top Bar: Icon, Name, Category Pill */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      mb: 1.5,
                      gap: 1,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                      <Box
                        sx={{
                          p: 0.8,
                          borderRadius: 2,
                          backgroundColor: `${categoryColor}18`,
                          color: categoryColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {getCategoryIcon(skill.category)}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                        {skill.name}
                      </Typography>
                    </Box>

                    {skill.featured && (
                      <Tooltip title="Core Focus Skill">
                        <StarsIcon sx={{ color: '#F59E0B', fontSize: 18 }} />
                      </Tooltip>
                    )}
                  </Box>

                  {/* Level Pill */}
                  <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                      Level: {skill.levelLabel}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: categoryColor,
                        fontWeight: 700,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {skill.level}%
                    </Typography>
                  </Box>

                  {/* Progress Bar */}
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      mb: 2,
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: categoryColor,
                        borderRadius: 3,
                      },
                    }}
                  />

                  {/* Description */}
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    {skill.description}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {filteredSkills.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No skills found matching "{searchQuery}".
            </Typography>
          </Box>
        )}

        {/* Bottom Competency Breakdown Banner */}
        <Paper
          elevation={0}
          sx={{
            mt: 6,
            p: 3.5,
            borderRadius: 3.5,
            background: isDark
              ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)'
              : 'linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(2, 132, 199, 0.05) 100%)',
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Dual Capability: Web Engineering + Physical IT Maintenance
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Unlike pure software developers or pure hardware technicians, my hybrid background allows me to build modern user interfaces with React & Fastify while also setting up office network devices, diagnosing computer motherboard/RAM issues, and troubleshooting workstations.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Chip
                icon={<CheckCircleIcon />}
                label="Full-Cycle Reliability"
                color="primary"
                variant="filled"
                sx={{ fontWeight: 700, py: 2, px: 1, borderRadius: 2.5 }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

