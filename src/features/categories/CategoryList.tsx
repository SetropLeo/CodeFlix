import React from 'react';

import { Box, Button, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridToolbar,
} from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteCategory, selectCategories } from './CategorySlice';

const CategoryList = () => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();

  const componentProps = {
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 },
    },
  };

  const handleDeleteCategory = (id: number) => {
    dispatch(deleteCategory(id));
  };

  const mountNameCell = (params: GridRenderCellParams) => {
    return (
      <Link
        style={{ textDecoration: 'none' }}
        to={`/categories/edit/${params.id}`}
      >
        <Typography color="primary">{params.value}</Typography>
      </Link>
    );
  };

  const mountStatusCell = (params: GridRenderCellParams) => {
    return (
      <Typography color={params.value ? 'ActiveCaption' : 'error'}>
        {params.value ? 'Active' : 'Inactive'}
      </Typography>
    );
  };

  const mountActionCell = (params: GridRenderCellParams) => {
    return (
      <IconButton
        color="secondary"
        onClick={() => handleDeleteCategory(params.value)}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    );
  };

  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    isActive: category.is_active,
    createdAt: new Date(category.created_at).toLocaleString("pt-BR"),
  }));

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      renderCell: mountNameCell,
    },
    {
      field: 'isActive',
      headerName: 'Active',
      flex: 1,
      type: 'boolean',
      renderCell: mountStatusCell,
    },
    { field: 'createdAt', headerName: 'Created At', flex: 1 },
    {
      field: 'id',
      headerName: 'Actions',
      flex: 1,
      renderCell: mountActionCell,
    },
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

      <Box sx={{ display: 'flex', height: 600 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnFilter={true}
          disableColumnSelector={true}
          disableDensitySelector={true}
          disableRowSelectionOnClick={true}
          slotProps={componentProps}
          slots={{ toolbar: GridToolbar }}
          pageSizeOptions={[5, 10, 25, 50, 100]}
        />
      </Box>
    </Box>
  );
};

export default CategoryList;
