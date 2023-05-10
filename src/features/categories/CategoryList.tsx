import React from 'react';

import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { selectCategories } from './CategorySlice';
import { useAppSelector } from '../../app/hooks';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

const CategoryList = () => {
  const categories = useAppSelector(selectCategories);

  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
  }));

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
  ];

  return (
    <Box maxWidth="lg" sx={{ mb: 4, mt: 4 }}>
      <Typography variant="h3" component="h1">
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/categories/create"
            style={{ marginBottom: '1rem' }}
          >
            New Category
          </Button>
        </Box>
      </Typography>

      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Box>
  );
};

export default CategoryList;
