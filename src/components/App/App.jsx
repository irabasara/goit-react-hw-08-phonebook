import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ContactPage } from 'pages/ContactPage/ContactPage';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selector';
import { refreshUser } from 'redux/auth/authOperations';
import { Home } from 'pages/Home/Home';
import { RestrictedRoute } from 'components/routes/RestrictedRoute';
import { PrivateRoute } from 'components/routes/PrivateRoute';

const theme = createTheme({
  palette: {
    primary: {
      main: '#50777a',
    },
    secondary: {
      main: '#7986cb',
    },
  },
});

export const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<ContactPage />} />
              }
            ></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            ></Route>
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            ></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    )
  );
};
