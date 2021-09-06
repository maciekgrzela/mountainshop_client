import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductsDetails from './Pages/Product/ProductsDetails/ProductsDetails';
import Welcome from './Pages/Welcome/Welcome';
import Products from './Pages/Product/Products';
import Cart from './Pages/Cart/Cart';
import SignIn from './Pages/Access/SignIn';
import Account from './Pages/Access/Account';
import SignUp from './Pages/Access/SignUp';
import NotFound from './Pages/Errors/NotFound';
import About from './Pages/Static/About';
import RefundPolicy from './Pages/Static/RefundPolicy';
import Statute from './Pages/Static/Statute';
import StationaryShop from './Pages/Static/StationaryShop';
import OrderDetails from './Pages/OrderDetails/OrderDetails';
import ScrollToTop from './ScrollToTop';
import OrderDetailsSuccess from './Pages/OrderDetails/OrderDetailsSuccess';
import CheckoutRedirect from './Pages/Checkout/CheckoutRedirect';
import UserNotSignedIn from './Pages/Access/UserNotSignedIn';
import UpdateMyData from './Pages/Access/UpdateMyData';
import AuthRoute from './AuthRoute';
import ServerErrors from './Pages/Errors/ServerErrors';

const Main = () => {
  const interfaceState = useSelector((state) => state.interface);
  const user = useSelector((state) => state.user);

  return (
    <main className='page-wrapper__main main'>
      <ScrollToTop />
      <Switch>
        <Route exact path='/'>
          {interfaceState.welcomeSkipped ? (
            <Redirect
              to={{
                pathname: '/products',
              }}
            />
          ) : (
            <Welcome />
          )}
        </Route>
        <Route path='/products/:id' component={ProductsDetails} />
        <Route path='/products' component={Products} />
        <Route exact path='/cart' component={Cart} />
        <AuthRoute exact path='/order/details' component={OrderDetails} />
        <Route exact path='/order/created' component={OrderDetailsSuccess} />
        <AuthRoute exact path='/update/data' component={UpdateMyData} />
        <AuthRoute
          exact
          path='/checkout/redirect'
          component={CheckoutRedirect}
        />
        <Route path='/sign/in'>
          {user.isLogged === true ? (
            interfaceState.redirectToOrderAfterLogin ? (
              <Redirect to='/order/details' />
            ) : (
              <Redirect to='/account' />
            )
          ) : (
            <SignIn />
          )}
        </Route>
        <AuthRoute exact path='/sign/up' component={SignUp} />
        <AuthRoute
          exact
          path='/account'
          component={Account}
          redirectPath='/sign/in'
        />
        <Route exact path='/about' component={About} />
        <Route exact path='/refund/policy' component={RefundPolicy} />
        <Route exact path='/statute' component={Statute} />
        <Route exact path='/stationary/shop' component={StationaryShop} />
        <Route exact path='/user/not/signed/in' component={UserNotSignedIn} />
        <Route exact path='/server/error' component={ServerErrors} />
        <Route path='*' component={NotFound} />
      </Switch>
    </main>
  );
};

export default Main;
