import { Box, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { Header } from './components';

const theme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={{
          height: '100vh',
          backgroundColor: '#000',
        }}
      >
        <Header />
      </Box>
    </ThemeProvider>
  );
};

export default App;
