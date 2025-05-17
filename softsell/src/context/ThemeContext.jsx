import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#6B4EFF', // Deep Purple
        light: '#8A7AFF',
        dark: '#4A3CDB',
      },
      secondary: {
        main: '#00BFA5', // Teal
        light: '#33CCB8',
        dark: '#00897B',
      },
      background: {
        default: darkMode ? '#121212' : '#FFF9E6', // Light yellow background
        paper: darkMode ? '#1E1E1E' : '#FFFFFF',
      },
      success: {
        main: '#00E676', // Bright Green
      },
      info: {
        main: '#FFD600', // Bright Yellow
      },
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        background: 'linear-gradient(45deg, #6B4EFF 30%, #00BFA5 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      h2: {
        fontWeight: 600,
        color: darkMode ? '#8A7AFF' : '#6B4EFF',
      },
      h3: {
        fontWeight: 600,
        color: darkMode ? '#33CCB8' : '#00BFA5',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 25,
            textTransform: 'none',
            fontWeight: 600,
            padding: '8px 24px',
          },
          contained: {
            background: 'linear-gradient(45deg, #6B4EFF 30%, #00BFA5 90%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #4A3CDB 30%, #00897B 90%)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundImage: 'none',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#6B4EFF',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#00BFA5',
              },
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: 'linear-gradient(135deg, #FFF9E6 0%, #FFF5D6 100%)',
            minHeight: '100vh',
          },
        },
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}; 