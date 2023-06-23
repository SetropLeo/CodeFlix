import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Category {
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

// Select All Categories
export const selectCategories = (state: RootState) => state.categories;
// Select Category By Id
export const selectCategoryById = (state: RootState, id: string) => {
  const category = state.categories.find((category) => category.id === id);

  return category || {
    id: '',
    name: '',
    description: '',
    is_active: false,
    deleted_at: null,
    created_at: '',
    updated_at: '',
  }
}

export default categoriesSlice.reducer;
