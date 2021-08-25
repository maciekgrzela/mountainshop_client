import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductsCategory from './Pages/Product/ProductsCategory';
import ProductsDetails from './Pages/Product/ProductsDetails/ProductsDetails';
import Welcome from './Pages/Welcome/Welcome';
import Products from './Pages/Product/Products';
import Cart from './Pages/Cart/Cart';
import SignIn from './Pages/Access/SignIn';
import Account from './Pages/Access/Account';
import SignUp from './Pages/Access/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/Static/About';
import RefundPolicy from './Pages/Static/RefundPolicy';
import Statute from './Pages/Static/Statute';
import { useSelector } from 'react-redux';
import Payment from './Pages/Payment/Payment';
import StationaryShop from './Pages/Static/StationaryShop';
import OrderDetails from './Pages/OrderDetails/OrderDetails';
import ScrollToTop from './ScrollToTop';

const Main = () => {
  const interfaceState = useSelector((state) => state.interface);
  const user = useSelector((state) => state.user);

  return (
    <main className='page-wrapper__main main'>
      <ScrollToTop />
      <Switch>
        {interfaceState.welcomeSkipped === false ? (
          <Route exact path='/'>
            <Welcome />
          </Route>
        ) : (
          <Route exact path='/'>
            <Redirect
              to={{
                pathname: '/products',
              }}
            />
          </Route>
        )}
        <Route path='/products/:id' children={<ProductsDetails />} />
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/payment'>
          <Payment />
        </Route>
        <Route path='/order/details'>
          <OrderDetails />
        </Route>
        <Route path='/sign/in'>
          {user.isLogged === true ? <Redirect to='/account' /> : <SignIn />}
        </Route>
        <Route path='/sign/up'>
          <SignUp />
        </Route>
        <Route path='/account'>
          {user.isLogged === true ? <Account /> : <Redirect to='/sign/in' />}
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/refund/policy'>
          <RefundPolicy />
        </Route>
        <Route path='/statute'>
          <Statute />
        </Route>
        <Route path='/stationary/shop'>
          <StationaryShop />
        </Route>
        <Route path='/category/:id' children={<ProductsCategory />} />
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
