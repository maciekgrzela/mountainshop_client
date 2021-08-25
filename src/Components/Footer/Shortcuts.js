import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Shortcuts = () => {
  return (
    <div className='shortcuts'>
      <h4 className='shortcuts__title'>Na skróty</h4>
      <hr className='shortcuts__line' />
      <div className='shortcuts__container'>
        <ul className='shortcuts__list'>
          <li className='shortcuts__item'>
            <NavLink exact activeStyle={{ fontWeight: 900 }} to='/'>
              Strona Główna
            </NavLink>
          </li>
          <li className='shortcuts__item'>
            <NavLink exact activeStyle={{ fontWeight: 900 }} to='/cart'>
              Koszyk
            </NavLink>
          </li>
          <li className='shortcuts__item'>
            <NavLink exact activeStyle={{ fontWeight: 900 }} to='/statute'>
              Regulamin sklepu
            </NavLink>
          </li>
          <li className='shortcuts__item'>
            <NavLink
              exact
              activeStyle={{ fontWeight: 900 }}
              to='/refund/policy'
            >
              Zwroty i reklamacje
            </NavLink>
          </li>
          <li className='shortcuts__item'>
            <NavLink
              exact
              activeStyle={{ fontWeight: 900 }}
              to='/stationary/shop'
            >
              Sklep stacjonarny
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shortcuts;
