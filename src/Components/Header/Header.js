import React from 'react';
import { useSelector } from 'react-redux';
import ProductsDetailsBar from '../../Pages/Product/ProductsDetails/ProductsDetailsBar';
import Navbar from './Navbar';
import Topbar from './Topbar';

const Header = () => {
  const interfaceState = useSelector((state) => state.interface);
  const cart = useSelector((state) => state.cart);

  return (
    <header className='page-wrapper__header header'>
      <Topbar cart={cart.cart} skipped={interfaceState.welcomeSkipped} />
      {interfaceState.welcomeSkipped === false && <Navbar />}
      {interfaceState.welcomeSkipped === true &&
        interfaceState.singleProductScrolling === true && (
          <ProductsDetailsBar />
        )}
    </header>
  );
};

export default Header;
