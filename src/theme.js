import { createTheme } from '@mui/material/styles';

export const getAppTheme = (mode = 'dark') => {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? '#38BDF8' : '#0369A1',
        light: isDark ? '#7DD3FC' : '#0284C7',
        dark: isDark ? '#0284C7' : '#075985',
        contrastText: isDark ? '#04101F' : '#F0F7FF',
      },
      secondary: {
        main: isDark ? '#818CF8' : '#4338CA',
        light: isDark ? '#A5B4FC' : '#4F46E5',
        dark: isDark ? '#6366F1' : '#3730A3',
        contrastText: '#F0F7FF',
      },
      accent: {
        main: isDark ? '#34D399' : '#047857',
      },
      background: {
        default: isDark ? '#050B16' : '#DCE7F3',
        paper: isDark ? '#0C1527' : '#EDF3FA',
        subtle: isDark ? '#091120' : '#D2E0EF',
        card: isDark ? 'rgba(12, 21, 39, 0.82)' : 'rgba(237, 243, 250, 0.88)',
        tag: isDark ? 'rgba(56, 189, 248, 0.10)' : 'rgba(3, 105, 161, 0.10)',
        tagBorder: isDark ? 'rgba(56, 189, 248, 0.25)' : 'rgba(3, 105, 161, 0.26)',
        tagText: isDark ? '#BAE6FD' : '#0C4A6E',
      },
      text: {
        primary: isDark ? '#E6EEF8' : '#0C1A2E',
        secondary: isDark ? '#9FB3C8' : '#2B4263',
      },
      divider: isDark ? 'rgba(140, 185, 255, 0.15)' : 'rgba(15, 38, 71, 0.15)',
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
            transition: 'background-color 0.35s ease, color 0.35s ease',
            overflowX: 'hidden',
          },
          '::selection': {
            backgroundColor: isDark ? '#38BDF8' : '#0369A1',
            color: isDark ? '#04101F' : '#F0F7FF',
          },
          '*::-webkit-scrollbar': {
            width: '8px',
          },
          '*::-webkit-scrollbar-track': {
            background: isDark ? '#050B16' : '#D2E0EF',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: isDark ? '#1E293B' : '#94A9C4',
            borderRadius: '4px',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            color: isDark ? '#E6EEF8' : '#0C1A2E',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: '10px 22px',
            fontSize: '0.95rem',
            transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
            boxShadow: 'none',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: isDark
                ? '0 10px 25px -5px rgba(56, 189, 248, 0.3)'
                : '0 10px 25px -5px rgba(3, 105, 161, 0.25)',
            },
          },
          containedPrimary: {
            background: isDark
              ? 'linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)'
              : 'linear-gradient(135deg, #0284C7 0%, #1D4ED8 100%)',
            color: '#F8FAFC',
          },
          outlined: {
            color: isDark ? '#E6EEF8' : '#0C1A2E',
            borderColor: isDark ? 'rgba(140, 185, 255, 0.25)' : 'rgba(15, 38, 71, 0.25)',
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.35)',
            '&:hover': {
              borderColor: isDark ? '#38BDF8' : '#0369A1',
              backgroundColor: isDark ? 'rgba(56, 189, 248, 0.10)' : 'rgba(3, 105, 161, 0.08)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: isDark ? 'rgba(12, 21, 39, 0.82)' : 'rgba(237, 243, 250, 0.88)',
            backdropFilter: 'blur(12px)',
            boxShadow: isDark
              ? '0 16px 40px -12px rgba(0, 0, 0, 0.5)'
              : '0 16px 36px -12px rgba(20, 50, 90, 0.10)',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? 'rgba(5, 11, 22, 0.65)' : 'rgba(225, 235, 246, 0.65)',
            borderRadius: 12,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: isDark ? 'rgba(140, 185, 255, 0.2)' : 'rgba(15, 38, 71, 0.2)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: isDark ? '#38BDF8' : '#0369A1',
            },
          },
          input: {
            color: isDark ? '#E6EEF8' : '#0C1A2E',
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: isDark ? '#9FB3C8' : '#2B4263',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 600,
          },
        },
      },
    },
  });
};
