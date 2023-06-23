import React, { useState } from 'react';

import { Box, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { CategoryForm } from '.';
import { useAppSelector } from '../../app/hooks';
import { selectCategoryById } from './CategorySlice';

const CategoryEdit = () => {
  const id = useParams().id || '';
  const category = useAppSelector((state) => selectCategoryById(state, id));
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e: React.ChangeEvent) => {};

  const handleToggle = (e: React.ChangeEvent) => {};

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>

        <CategoryForm
          category={category}
          isDisabled={isDisabled}
          isLoading={false}
          onSubmit={() => {}}
          onChange={handleChange}
          onToggle={handleToggle}
        />
      </Paper>
    </Box>
  );
};

export default CategoryEdit;
