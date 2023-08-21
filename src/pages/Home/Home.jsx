import React from 'react';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';
import { Box, Typography } from '@mui/material';
import { UserNav } from 'components/UserNav/UserNav';

export const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h3" color="primary">
        Welcome to phonebook
      </Typography>
      <ContactPhoneSharpIcon
        sx={{ width: '400px', height: '300px', fill: '#c7e4e1' }}
      />
      <UserNav />
    </Box>
  );
};
