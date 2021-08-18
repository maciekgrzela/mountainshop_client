import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsSlice } from '../../../Actions/ActionCreators/Products';

import ProductsViewHeading from './ProductsViewHeading';
import ProductsViewProducts from './ProductsViewProducts';

const ProductsView = () => {
  const dispatch = useDispatch();
  const productsViewType = useSelector(
    (state) => state.interface.productsViewType
  );

  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsSlice(false));
  }, []);

  useEffect(() => {
    if (categories.selectedCategory != null) {
      dispatch(fetchProductsSlice(true));
    }
  }, [categories.selectedCategory]);

  return (
    <main className='products-view'>
      <ProductsViewHeading
        selectedCategory={categories.selectedCategory}
        viewType={productsViewType}
      />
      <ProductsViewProducts
        products={products.products}
        viewType={productsViewType}
      />
    </main>
  );
};

export default ProductsView;
