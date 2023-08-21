import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Suspense fallback={<div>...loading</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
