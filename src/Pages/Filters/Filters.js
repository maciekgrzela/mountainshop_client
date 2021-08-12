import React from 'react';
import { FiFilter } from 'react-icons/fi';

const Filters = () => {
  return (
    <div className='categories-list__filters filters'>
      <div className='filters__price'>
        <h4>Cena:</h4>
        <input
          type='text'
          name='price-from'
          className='filters__price-from'
          placeholder='Od...'
        />
        <input
          type='text'
          name='price-to'
          className='filters__price-to'
          placeholder='Do...'
        />
      </div>
      <div className='filters__producer'>
        <h4>Producent:</h4>
        <form>
          <div>
            <input
              type='checkbox'
              id='Decathlon'
              name='Decathlon'
              value='Decathlon'
            />
            <label htmlFor='Decathlon'>Decathlon</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Quechua'
              name='Quechua'
              value='Quechua'
            />
            <label htmlFor='Quechua'>Quechua</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Forclaz'
              name='Forclaz'
              value='Forclaz'
            />
            <label htmlFor='Forclaz'>Forclaz</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Hi Mountain'
              name='Hi Mountain'
              value='Hi Mountain'
            />
            <label htmlFor='Hi Mountain'>Hi Mountain</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Fjord Najsen'
              name='Fjord Najsen'
              value='Fjord Najsen'
            />
            <label htmlFor='Fjord Najsen'>Fjord Najsen</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='Bergson'
              name='Bergson'
              value='Bergson'
            />
            <label htmlFor='Bergson'>Bergson</label>
          </div>
        </form>
      </div>
      <div className='filters__gender'>
        <h4>Przeznaczone:</h4>
        <form>
          <div>
            <input type='checkbox' id='male' name='male' value='male' />
            <label htmlFor='male'>Dla mężczyzn</label>
          </div>
          <div>
            <input type='checkbox' id='female' name='female' value='female' />
            <label htmlFor='female'>Dla kobiet</label>
          </div>
          <div>
            <input type='checkbox' id='unisex' name='unisex' value='unisex' />
            <label htmlFor='unisex'>Unisex</label>
          </div>
        </form>
      </div>
      <button className='filters__apply-btn'>
        Filtruj produkty <FiFilter className='filters__filter-icon' />
      </button>
    </div>
  );
};

export default Filters;
