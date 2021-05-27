import React from 'react';

const Navbar = () => {
  return (
    <nav className='header__navbar navbar'>
      <ul className='navbar__categories'>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <li key={item} className='navbar__category'>
            Kategoria {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
