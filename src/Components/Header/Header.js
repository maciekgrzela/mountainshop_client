import React from 'react';
import { useSelector } from 'react-redux';
import ProductsDetailsBar from '../../Pages/Product/ProductsDetails/ProductsDetailsBar';
import Navbar from './Navbar';
import Topbar from './Topbar';

const Header = () => {
  const interfaceState = useSelector((state) => state.interface);

  return (
    <header className='page-wrapper__header header'>
      <Topbar skipped={interfaceState.welcomeSkipped} />
      {interfaceState.welcomeSkipped === false && <Navbar />}
      {interfaceState.welcomeSkipped === true &&
        interfaceState.singleProductScrolling && <ProductsDetailsBar />}
    </header>
  );
};

export default Header;
