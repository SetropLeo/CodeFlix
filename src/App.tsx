import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Box, ThemeProvider } from '@mui/material';
import { Header, Layout } from './components';

import { appTheme } from './config';

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: '100vh',
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<div>oi</div>} />
            <Route path="about" element={<div>about</div>} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
};

export default App;
