import React, { useState } from 'react';

import { Box, Paper, Typography } from '@mui/material';
import { CategoryForm } from '.';
import { Category } from './CategorySlice';

const CategoryCreate = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [category, setCategory] = useState<Category>({
    id: '',
    name: '',
    description: '',
    is_active: false,
    created_at: '',
    deleted_at: '',
    updated_at: '',
  });

  const handleChange = (e: React.ChangeEvent) => {};

  const handleToggle = (e: React.ChangeEvent) => {};

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Category</Typography>
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

export default CategoryCreate;
