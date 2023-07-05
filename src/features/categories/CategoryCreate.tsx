import React, { useState } from 'react';

import { Box, Paper, Typography } from '@mui/material';
import { CategoryForm } from '.';
import { Category, createCategory } from './CategorySlice';
import { useAppDispatch } from '../../app/hooks';

const CategoryCreate = () => {
  const dispatch = useAppDispatch();
  
  const [isDisabled, setIsDisabled] = useState(false);
  const [categoryState, setCategoryState] = useState<Category>({
    id: '',
    name: '',
    description: '',
    is_active: false,
    created_at: '',
    deleted_at: '',
    updated_at: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createCategory(categoryState));
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
            <Typography variant="h4">Create Category</Typography>
          </Box>
        </Box>
        <CategoryForm
          isLoading={false}
          category={categoryState}
          isDisabled={isDisabled}
          handleChange={handleChange}
          handleToggle={handleToggle}
          handleSubmit={handleSubmit}
        />
      </Paper>
    </Box>
  );
};

export default CategoryCreate;
