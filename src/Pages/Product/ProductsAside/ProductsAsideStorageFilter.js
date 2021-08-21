import React from 'react';

const ProductsAsideStorageFilter = ({ setFilters }) => {
  const handleMinStorageFilter = (e) => {
    const updatedValue = e.target.value;
    setFilters((prev) => ({
      ...prev,
      amountInStorageConstraint: updatedValue,
    }));
  };

  return (
    <div className='filters__storage'>
      <h4>Minimalna dostępność:</h4>
      <input
        type='text'
        name='storage-to'
        onChange={handleMinStorageFilter}
        className='filters__storage-to'
        placeholder='Wprowadź liczbę SZT'
      />
    </div>
  );
};

export default ProductsAsideStorageFilter;
