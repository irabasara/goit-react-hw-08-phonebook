import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilters } from 'redux/contacts/selector';
import {
  deleteContacts,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import { Filter } from 'components/Filter/Filter';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, List, ListItem, Typography } from '@mui/material';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilters);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContact = () => {
    if (!contacts) return;
    return contacts.filter(contact =>
      contact.name.includes(filterValue.toLowerCase())
    );
  };

  const filteredContact = getFilteredContact();

  return (
    <Box sx={{ ml: '60px' }}>
      {contacts && (
        <Box
          sx={{
            maxHeight: 400,
            overflow: 'auto',
          }}
        >
          <List sx={{ padding: 0 }}>
            <Filter />
            {filteredContact.map(contact => (
              <ListItem
                sx={{
                  justifyContent: 'space-between',
                  boxShadow:
                    '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
                }}
                key={contact.id}
              >
                <Box>
                  <Typography variant="h6">{`${contact.name}`}</Typography>
                  <Typography variant="overline">{`${contact.number}`}</Typography>
                </Box>
                <IconButton
                  onClick={() => dispatch(deleteContacts(contact.id))}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};
