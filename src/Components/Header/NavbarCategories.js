import React, { useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import NavbarAllProductsCategory from './NavbarAllProductsCategory';
import NavbarCategoriesMenu from './NavbarCategoriesMenu';
import NavbarCategory from './NavbarCategory';

const NavbarCategories = ({ skipped, categories }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <ul className='navbar__categories'>
        {categories.map((item) => (
          <NavbarCategory setToggled={setToggled} item={item} />
        ))}
      </ul>
      <span
        onClick={() => setToggled(true)}
        className='navbar__categories-toggle navbar__categories-toggle--small'
      >
        Zobacz kategorie <FiArrowDown />
      </span>
      <NavbarCategoriesMenu
        skipped={skipped}
        toggled={toggled}
        setToggled={setToggled}
        categories={categories}
      />
    </>
  );
};

export default NavbarCategories;
