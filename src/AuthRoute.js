import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ component: Component, redirectPath = '/', ...rest }) => {
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to={redirectPath} />
      }
    />
  );
};

export default AuthRoute;
