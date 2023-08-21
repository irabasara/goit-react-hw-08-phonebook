import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getFiltersValue } from 'redux/contacts/filterSlice';
import { getFilters } from 'redux/contacts/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilters);

  return (
    <TextField
      id="filter"
      name="filter"
      label="Search..."
      value={filterValue}
      onChange={e => dispatch(getFiltersValue(e.target.value))}
      sx={{ width: '350px' }}
    />
  );
};
