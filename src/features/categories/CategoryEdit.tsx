import React, { useEffect, useState } from 'react';

import { Category } from '@material-ui/icons';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectCategoryById } from './CategorySlice';

const CategoryEdit = () => {
  const id = useParams().id || '';
  const category = useAppSelector((state) => selectCategoryById(state, id));
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e: React.ChangeEvent) => {};

  const handleToggle = (e: React.ChangeEvent) => {};

  useEffect(() => {}, []);

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>

        <Box p={2}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    required
                    name="name"
                    label="Name"
                    disabled={isDisabled}
                    value={category.name}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    required
                    name="description"
                    label="Description"
                    disabled={isDisabled}
                    onChange={handleChange}
                    value={category.description}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    label="Active"
                    control={
                      <Switch
                        name="is_active"
                        color="secondary"
                        onChange={handleToggle}
                        checked={category.is_active}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    }
                  ></FormControlLabel>
                </FormGroup>
              </Grid>

              <Grid item xs={12}>
                <Box display="flex" gap={2}>
                  <Button variant="contained" component={Link} to="/categories">
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={isDisabled}
                  >
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default CategoryEdit;
