import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
    primary: {
      main: '#2EC4B6', 
      light: '#CBF3F0',
      dark: '#259187',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FF9F1C',
      light: '#FFBF69',
      dark: '#E67E00',
      contrastText: '#fff',
    },
    background: {
      default: '#F7FDFC', 
      paper: '#ffffff',
    },
    text: {
      primary: '#2A4D4A', 
      secondary: '#5C8B87', 
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 300,
      letterSpacing: '0.1em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 300,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 300,
    },
    button: {
      textTransform: 'none',
      fontSize: '1.1rem',
      fontWeight: 500,
    },
  },
   components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          padding: '12px 32px',
          boxShadow: '0 3px 15px rgba(46, 196, 182, 0.15)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 5px 20px rgba(46, 196, 182, 0.25)',
          },
        },
        containedPrimary: {
          background: 'rgba(46, 196, 182, 0.1)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(46, 196, 182, 0.2)',
          color: '#2EC4B6',
          '&:hover': {
            background: 'rgba(46, 196, 182, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          border: '1px solid rgba(46, 196, 182, 0.1)', 
          boxShadow: '0 8px 32px rgba(46, 196, 182, 0.1)', 
        },
      },
    },
  },
});