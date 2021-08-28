import React, { useEffect, useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setProductsFilterProperties } from '../../../Actions/ActionCreators/Products';
import ProductsAsideNameFilter from './ProductsAsideNameFilter';
import ProductsAsidePriceFilter from './ProductsAsidePriceFilter';
import ProductsAsideStorageFilter from './ProductsAsideStorageFilter';
import ProductsAsideSaleFilter from './ProductsAsideSaleFilter';
import ProductsAsideTheNewFilter from './ProductsAsideTheNewFilter';
import ProductsAsideProducerFilter from './ProductsAsideProducerFilter';
import ProductsAsideGenderFilter from './ProductsAsideGenderFilter';

const ProductsAsideFilters = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});

  const handleApplyFilters = () => {
    dispatch(setProductsFilterProperties(filters));
  };

  return (
    <div className='categories-list__filters filters'>
      <ProductsAsideNameFilter setFilters={setFilters} />
      <ProductsAsidePriceFilter setFilters={setFilters} />
      <ProductsAsideStorageFilter setFilters={setFilters} />
      <ProductsAsideSaleFilter setFilters={setFilters} />
      <ProductsAsideTheNewFilter setFilters={setFilters} />
      <ProductsAsideProducerFilter setFilters={setFilters} />
      <ProductsAsideGenderFilter setFilters={setFilters} />
      <button className='filters__apply-btn' onClick={handleApplyFilters}>
        Filtruj produkty <FiFilter className='filters__filter-icon' />
      </button>
    </div>
  );
};

export default ProductsAsideFilters;
