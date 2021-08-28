import React from 'react';

const ProductsAsideNameFilter = ({ setFilters }) => {
  const handleNameFilter = (e) => {
    const updatedValue = e.target.value;
    setFilters((prev) => ({
      ...prev,
      nameFilter: updatedValue,
    }));
  };

  return (
    <div className='filters__name'>
      <h4>Nazwa:</h4>
      <input
        type='text'
        onChange={handleNameFilter}
        name='name'
        className='filters__name-value'
        placeholder='Zwrot występujący w nazwie produktu'
      />
    </div>
  );
};

export default ProductsAsideNameFilter;
