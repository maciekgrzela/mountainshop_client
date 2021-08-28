import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductsSlice,
  setProductsFilterProperty,
} from '../../../Actions/ActionCreators/Products';
import { fetchProducersSlice } from '../../../Actions/ActionCreators/Producers';

import ProductsViewHeading from './ProductsViewHeading';
import ProductsViewProducts from './ProductsViewProducts';
import { setSelectedCategory } from '../../../Actions/ActionCreators/Categories';

const ProductsView = () => {
  const dispatch = useDispatch();
  const productsViewType = useSelector(
    (state) => state.interface.productsViewType
  );

  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    dispatch(fetchProductsSlice(false));
    dispatch(fetchProducersSlice);
    if (query.has('category')) {
      dispatch(
        setSelectedCategory(
          categories.categories.filter((p) => p.id === query.get('category'))[0]
        )
      );
      dispatch(setProductsFilterProperty('categoryId', query.get('category')));
    }
  }, []);

  useEffect(() => {
    dispatch(fetchProductsSlice(true));
  }, [products.filterForDisplayedProducts]);

  return (
    <main className='products-view'>
      <ProductsViewHeading
        selectedCategory={categories.selectedCategory}
        viewType={productsViewType}
      />
      <ProductsViewProducts
        products={products.displayedProducts}
        viewType={productsViewType}
      />
    </main>
  );
};

export default ProductsView;
