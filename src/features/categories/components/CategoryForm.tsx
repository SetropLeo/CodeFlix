import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Category } from '../CategorySlice';

type Props = {
  category: Category;
  isDisabled?: boolean;
  isLoading?: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent) => void;
  onToggle: (e: React.ChangeEvent) => void;
};

const CategoryForm = ({
  category,
  isDisabled,
  isLoading,
  onSubmit,
  onChange,
  onToggle,
}: Props) => {
  return (
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
                onChange={onChange}
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
                onChange={onChange}
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
                    onChange={onToggle}
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
                onSubmit={onSubmit}
              >
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CategoryForm;
