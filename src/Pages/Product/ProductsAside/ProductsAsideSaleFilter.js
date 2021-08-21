import React from 'react';
import { FiPercent } from 'react-icons/fi';

const ProductsAsideSaleFilter = ({ setFilters }) => {
  const handleSaleFilter = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setFilters((prev) => ({
        ...prev,
        saleFilter: true,
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        saleFilter: null,
      }));
    }
  };

  return (
    <div className='filters__sale'>
      <h4>Promocja:</h4>
      <div>
        <FiPercent />
        <input
          type='checkbox'
          name='sale'
          onChange={handleSaleFilter}
          className='filters__sale-value'
        />
      </div>
    </div>
  );
};

export default ProductsAsideSaleFilter;
