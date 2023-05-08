import React from 'react';
import { Header, Layout } from './components';
import { Box, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={{
          height: '100vh',
          backgroundColor: 'white',
        }}
      >
        <Header />
        <Layout>
          <h1>Ola</h1>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
