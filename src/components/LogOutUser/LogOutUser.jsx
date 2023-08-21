import { Avatar, Button, Toolbar } from '@mui/material';

import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

export const LogOutUser = () => {
  const dispatch = useDispatch();
  return (
    <Toolbar>
      <Avatar variant="plain" />
      <Button onClick={() => dispatch(logOut())}>Log out</Button>
    </Toolbar>
  );
};
