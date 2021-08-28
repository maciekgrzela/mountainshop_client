import React from 'react';
import { FiTag } from 'react-icons/fi';

const ProductsAsideTheNewFilter = ({ setFilters }) => {
  const handleTheNewFilter = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setFilters((prev) => ({
        ...prev,
        theNewFilter: true,
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        theNewFilter: null,
      }));
    }
  };

  return (
    <div className='filters__sale'>
      <h4>Nowość:</h4>
      <div>
        <FiTag />
        <input
          type='checkbox'
          name='sale'
          onChange={handleTheNewFilter}
          className='filters__sale-value'
        />
      </div>
    </div>
  );
};

export default ProductsAsideTheNewFilter;
