import React from 'react';
import { Link } from 'react-router-dom';

const Shortcuts = () => {
  return (
    <div className='shortcuts'>
      <h4 className='shortcuts__title'>Na skróty</h4>
      <hr className='shortcuts__line' />
      <div className='shortcuts__container'>
        <ul className='shortcuts__list'>
          <li className='shortcuts__item'>
            <Link to='/'>Strona Główna</Link>
          </li>
          <li className='shortcuts__item'>
            <Link to='/cart'>Koszyk</Link>
          </li>
          <li className='shortcuts__item'>
            <Link to='/statute'>Regulamin sklepu</Link>
          </li>
          <li className='shortcuts__item'>
            <Link to='/refund/policy'>Zwroty i reklamacje</Link>
          </li>
          <li className='shortcuts__item'>
            <Link to='/stationary/shop'>Sklep stacjonarny</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shortcuts;
