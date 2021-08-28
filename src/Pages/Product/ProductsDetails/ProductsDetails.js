import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsDetailsComments from './ProductsDetailsComments';
import ProductsDetailsContent from './ProductsDetailsContent';
import ProductsDetailsHeading from './ProductsDetailsHeading';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDisplayedProductSlice,
  removeDisplayedProduct,
  fetchCommentsForDisplayedProductSlice,
  fetchPropertiesForDisplayedProductSlice,
  fetchProductsSlice,
} from '../../../Actions/ActionCreators/Products';
import { setSingleProductScrolling } from '../../../Actions/ActionCreators/Interface';

const ProductsDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const products = useSelector((state) => state.products);

  const onScroll = (e) => {
    if (window.scrollY < 50) {
      dispatch(setSingleProductScrolling(false));
    }
    if (window.scrollY >= 50) {
      dispatch(setSingleProductScrolling(true));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    if (products.displayedProducts.length === 0) {
      console.log('LENGTH ZERO');
      dispatch(fetchProductsSlice(false));
    }
    dispatch(setDisplayedProductSlice(id));
    dispatch(fetchPropertiesForDisplayedProductSlice(id));
    dispatch(fetchCommentsForDisplayedProductSlice(id));

    return () => {
      dispatch(removeDisplayedProduct);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <main className='products-details'>
      {products.displayedProduct !== null &&
        products.displayedProducts !== null &&
        products.displayedProperties !== null &&
        products.displayedComments !== null && (
          <>
            <ProductsDetailsHeading product={products.displayedProduct} />
            <ProductsDetailsContent
              properties={products.displayedProperties}
              product={products.displayedProduct}
              otherProducts={products.displayedProducts}
            />
            <ProductsDetailsComments comments={products.displayedComments} />
          </>
        )}
    </main>
  );
};

export default ProductsDetails;
