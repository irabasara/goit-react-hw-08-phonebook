import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, Toolbar } from '@mui/material';
import { LogOutUser } from 'components/LogOutUser/LogOutUser';
import { UserNav } from 'components/UserNav/UserNav';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selector';

export const Header = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldAccess = !isLogin && !isRefreshing;

  return (
    <AppBar
      component="nav"
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#c7e4e1',
        position: 'static',
        mb: '50px',
      }}
    >
      <Toolbar>
        {shouldAccess ? (
          <Button component={RouterLink} to="/">
            Home
          </Button>
        ) : (
          <Button component={RouterLink} to="/contacts">
            Contacts
          </Button>
        )}
      </Toolbar>

      {isLogin ? <LogOutUser /> : <UserNav />}
    </AppBar>
  );
};
