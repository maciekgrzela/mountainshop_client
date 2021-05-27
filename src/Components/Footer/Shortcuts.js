import React from 'react';

const Shortcuts = () => {
  return (
    <div className='shortcuts'>
      <h4 className='shortcuts__title'>Na skróty</h4>
      <hr className='shortcuts__line' />
      <div className='shortcuts__container'>
        <ul className='shortcuts__list'>
          <li className='shortcuts__item'>Strona Główna</li>
          <li className='shortcuts__item'>Koszyk</li>
          <li className='shortcuts__item'>Promocje</li>
          <li className='shortcuts__item'>Regulamin sklepu</li>
          <li className='shortcuts__item'>Zwroty i reklamacje</li>
          <li className='shortcuts__item'>Polityka prywatności</li>
          <li className='shortcuts__item'>Sklep stacjonarny</li>
        </ul>
      </div>
    </div>
  );
};

export default Shortcuts;
