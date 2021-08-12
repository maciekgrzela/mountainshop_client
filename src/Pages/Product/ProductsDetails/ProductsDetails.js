import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsDetailsComments from './ProductsDetailsComments';
import ProductsDetailsContent from './ProductsDetailsContent';
import ProductsDetailsHeading from './ProductsDetailsHeading';

const ProductsDetails = () => {
  const { id } = useParams();

  return (
    <main className='products-details'>
      <ProductsDetailsHeading id={id} />
      <ProductsDetailsContent />
      <ProductsDetailsComments />
    </main>
  );
};

export default ProductsDetails;
