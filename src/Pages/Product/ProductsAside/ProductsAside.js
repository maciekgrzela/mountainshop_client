import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesSlice } from '../../../Actions/ActionCreators/Categories';
import ProductsAsideFilters from './ProductsAsideFilters';
import ProductsCategoriesListItems from './ProductsCategoriesListItems';

const ProductsAside = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesSlice);
  }, []);

  return (
    <aside className='products-aside categories-list'>
      <h3 className='categories-list__header'>Wybierz kategorię</h3>
      <ProductsCategoriesListItems categories={categories.categories} />
      <h3 className='categories-list__header mt-3'>Filtruj produkty</h3>
      <ProductsAsideFilters />
    </aside>
  );
};

export default ProductsAside;
