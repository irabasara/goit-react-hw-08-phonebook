import { Button, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import React from 'react';

export const UserNav = () => {
  return (
    <Toolbar sx={{ gap: '10px', underline: 'none' }}>
      <Button component={RouterLink} size="large" to="/register">
        Register
      </Button>
      <Button component={RouterLink} size="large" to="/login">
        Login
      </Button>
    </Toolbar>
  );
};
