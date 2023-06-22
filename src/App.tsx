import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Box, ThemeProvider } from '@mui/material';
import { Header, Layout } from './components';
import { CategoryCreate, CategoryEdit, CategoryList } from './features';

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
            <Route path="/" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/create" element={<CategoryCreate />} />
            <Route path="/categories/edit/:id" element={<CategoryEdit />} />

            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
};

export default App;
