import React from 'react';

const ProductsAsidePriceFilter = ({ setFilters }) => {
  const handleGrossPriceMinFilter = (e) => {
    const updatedValue = e.target.value;
    setFilters((prev) => ({
      ...prev,
      grossPriceMinFilter: updatedValue,
    }));
  };

  const handleGrossPriceMaxFilter = (e) => {
    const updatedValue = e.target.value;
    setFilters((prev) => ({
      ...prev,
      grossPriceMaxFilter: updatedValue,
    }));
  };

  return (
    <div className='filters__price'>
      <h4>Cena:</h4>
      <input
        type='text'
        name='price-from'
        onChange={handleGrossPriceMinFilter}
        className='filters__price-from'
        placeholder='Od...'
      />
      <input
        type='text'
        name='price-to'
        onChange={handleGrossPriceMaxFilter}
        className='filters__price-to'
        placeholder='Do...'
      />
    </div>
  );
};

export default ProductsAsidePriceFilter;
