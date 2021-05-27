import React from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';

const Header = () => {
  return (
    <header className='page-wrapper__header header'>
      <Topbar />
      <Navbar />
    </header>
  );
};

export default Header;
