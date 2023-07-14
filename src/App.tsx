import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { CategoryCreate, CategoryEdit, CategoryList } from './features';
import { Header, Layout } from './components';
import { Box, ThemeProvider } from '@mui/material';

import { SnackbarProvider } from 'notistack';

import { appTheme } from './config';

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={3000}
      >
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
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
