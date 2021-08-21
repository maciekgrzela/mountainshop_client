import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductsSlice,
  setProductsFilterProperty,
} from '../../../Actions/ActionCreators/Products';
import { fetchProducersSlice } from '../../../Actions/ActionCreators/Producers';

import ProductsViewHeading from './ProductsViewHeading';
import ProductsViewProducts from './ProductsViewProducts';
import InfiniteScroll from 'react-infinite-scroller';

const ProductsView = () => {
  const dispatch = useDispatch();
  const productsViewType = useSelector(
    (state) => state.interface.productsViewType
  );

  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsSlice(false));
    dispatch(fetchProducersSlice);
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
