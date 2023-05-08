import { Box, Container } from '@mui/material';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, bg: '#000' }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
