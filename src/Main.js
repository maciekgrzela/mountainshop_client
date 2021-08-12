import React from 'react';
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

const Main = () => {
  const interfaceState = useSelector((state) => state.interface);

  return (
    <main className='page-wrapper__main main'>
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
        <Route path='/sign/in'>
          <SignIn />
        </Route>
        <Route path='/sign/up'>
          <SignUp />
        </Route>
        <Route path='/account'>
          <Account />
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
        <Route path='/category/:id' children={<ProductsCategory />} />
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
