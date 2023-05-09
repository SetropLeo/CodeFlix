import { createSlice } from '@reduxjs/toolkit';

interface Category {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  description: null | string;
}

const category: Category = {
  id: '0ce68ddd-4981-4eee-a23b-9c1b8b5b8b1e',
  name: 'Olive',
  description: ' earum quia et et autem',
  is_active: true,
  deleted_at: null,
  created_at: '2022-08-15T10:59:09+0000',
  updated_at: '2022-08-15T10:59:09+0000',
};

export const initialState = [
  category,
  { ...category, id: '1ce68ddd-4981-4eee-a23b-9c1b8b5b8b1e', name: 'Lemon' },
  { ...category, id: '2ce68ddd-4981-4eee-a23b-9c1b8b5b8b1e', name: 'Peach' },
  { ...category, id: '3ce68ddd-4981-4eee-a23b-9c1b8b5b8b1e', name: 'Banana' },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    createCategory(state, action) {},
    updateCategory(state, action) {},
    deleteCategory(state, action) {},
  },
});

export default categoriesSlice.reducer;
