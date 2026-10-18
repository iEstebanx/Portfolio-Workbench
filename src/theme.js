import { createTheme } from '@mui/material/styles';

export const getAppTheme = (mode = 'dark') => {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? '#6366F1' : '#4F46E5', // Modern Indigo
        light: isDark ? '#818CF8' : '#6366F1',
        dark: isDark ? '#4338CA' : '#3730A3',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: isDark ? '#06B6D4' : '#0284C7', // Cyan / Sky Blue
        light: isDark ? '#38BDF8' : '#38BDF8',
        dark: isDark ? '#0891B2' : '#0369A1',
        contrastText: '#FFFFFF',
      },
      accent: {
        main: isDark ? '#10B981' : '#059669', // Emerald
      },
      background: {
        default: isDark ? '#0B0F19' : '#F8FAFC',
        paper: isDark ? '#111827' : '#FFFFFF',
        subtle: isDark ? '#161F30' : '#F1F5F9',
        card: isDark ? 'rgba(17, 24, 39, 0.85)' : 'rgba(255, 255, 255, 0.9)',
      },
      text: {
        primary: isDark ? '#F9FAFB' : '#0F172A',
        secondary: isDark ? '#9CA3AF' : '#64748B',
      },
      divider: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
    },
    typography: {
      fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.025em',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h3: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h4: {
        fontWeight: 700,
        letterSpacing: '-0.015em',
      },
      h5: {
        fontWeight: 600,
        letterSpacing: '-0.01em',
      },
      h6: {
        fontWeight: 600,
      },
      subtitle1: {
        lineHeight: 1.6,
      },
      body1: {
        lineHeight: 1.7,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
      code: {
        fontFamily: "'JetBrains Mono', monospace",
      },
    },
    shape: {
      borderRadius: 14,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: 'smooth',
          },
          body: {
            transition: 'background-color 0.3s ease, color 0.3s ease',
            overflowX: 'hidden',
          },
          '::selection': {
            backgroundColor: isDark ? '#6366F1' : '#4F46E5',
            color: '#FFFFFF',
          },
          '*::-webkit-scrollbar': {
            width: '8px',
          },
          '*::-webkit-scrollbar-track': {
            background: isDark ? '#0B0F19' : '#F1F5F9',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: isDark ? '#374151' : '#CBD5E1',
            borderRadius: '4px',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: '10px 22px',
            fontSize: '0.95rem',
            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: 'none',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: isDark
                ? '0 10px 25px -5px rgba(99, 102, 241, 0.35)'
                : '0 10px 25px -5px rgba(79, 70, 229, 0.3)',
            },
          },
          containedPrimary: {
            background: isDark
              ? 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)'
              : 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)',
          },
          outlined: {
            borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
            '&:hover': {
              borderColor: isDark ? '#6366F1' : '#4F46E5',
              background: isDark ? 'rgba(99, 102, 241, 0.08)' : 'rgba(79, 70, 229, 0.05)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
          },
        },
      },
    },
  });
};

