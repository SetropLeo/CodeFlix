import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Category, selectCategoryById, updateCategory } from './CategorySlice';

import { Box, Paper, Typography } from '@mui/material';
import { CategoryForm } from '.';

const CategoryEdit = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  const id = useParams().id || '';
  const category = useAppSelector((state) => selectCategoryById(state, id));

  const [categoryState, setCategoryState] = useState<Category>(category);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateCategory(categoryState));
    enqueueSnackbar("Success updating category", { variant: 'success' })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryState({ ...categoryState, [name]: value });
  };

  const handleToggle = (e: React.ChangeEvent<Element>) => {
    const { name, checked } = e.target as HTMLInputElement;
    setCategoryState({ ...categoryState, [name]: checked });
  };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>

        <CategoryForm
          isLoading={false}
          isDisabled={isDisabled}
          category={categoryState}
          handleToggle={handleToggle}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Paper>
    </Box>
  );
};

export default CategoryEdit;
