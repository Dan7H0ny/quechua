import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary:   { main: '#C45C00', light: '#E87020', dark: '#8B3E00' },
    secondary: { main: '#D4960A', light: '#F4A453', dark: '#9B6E07' },
    background:{ default: '#FDF6EC', paper: '#FFFFFF' },
    text:      { primary: '#6B3A1F', secondary: '#8a6040' },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    h1: { fontFamily: "'Cinzel Decorative', serif" },
    h2: { fontFamily: "'Cinzel Decorative', serif" },
    h3: { fontFamily: "'Playfair Display', serif" },
    h4: { fontFamily: "'Playfair Display', serif" },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          fontWeight: 700,
          textTransform: 'none',
          fontSize: '0.95rem',
          padding: '12px 30px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 24px rgba(100,40,0,0.12)',
        },
      },
    },
  },
});

export default theme;
