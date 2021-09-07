import React from 'react';
import { FiX } from 'react-icons/fi';
import NavbarAllProductsCategory from './NavbarAllProductsCategory';
import NavbarCategory from './NavbarCategory';

const NavbarCategoriesMenu = ({ skipped, categories, toggled, setToggled }) => {
  return (
    <div
      className={`navbar__categories-menu categories-menu ${
        toggled && 'categories-menu--toggled'
      }`}
    >
      <div onClick={() => setToggled(false)} className='categories-menu__close'>
        <FiX />
      </div>
      <NavbarAllProductsCategory setToggled={setToggled} />
      <ul>
        {categories.map((item) => (
          <NavbarCategory
            setToggled={setToggled}
            skipped={skipped}
            small
            item={item}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavbarCategoriesMenu;
