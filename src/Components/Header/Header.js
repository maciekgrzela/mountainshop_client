import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Topbar from './Topbar';

const Header = () => {
  const interfaceState = useSelector((state) => state.interface);

  return (
    <header className='page-wrapper__header header'>
      <Topbar />
      {interfaceState.welcomeSkipped === false && <Navbar />}
    </header>
  );
};

export default Header;
