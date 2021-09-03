import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { skipWelcome } from '../../Actions/ActionCreators/Interface';
import ProductsAside from './ProductsAside/ProductsAside';
import ProductsView from './ProductsView/ProductsView';

const Products = () => {
  const dispatch = useDispatch();
  const welcomeSkipped = useSelector((state) => state.interface.welcomeSkipped);

  useEffect(() => {
    if (!welcomeSkipped) {
      dispatch(skipWelcome());
    }
  }, []);

  return (
    <div className='products-page'>
      <ProductsAside />
      <ProductsView />
    </div>
  );
};

export default Products;
