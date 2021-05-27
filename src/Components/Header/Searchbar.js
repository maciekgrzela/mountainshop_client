import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  return (
    <div className='topbar__searchbar searchbar'>
      <div className='searchbar__wrapper'>
        <input
          type='text'
          name='search'
          placeholder='Wyszukaj produkt...'
          className='searchbar__input'
        />
        <button className='searchbar__btn'>
          <FiSearch className='searchbar__icon' />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
