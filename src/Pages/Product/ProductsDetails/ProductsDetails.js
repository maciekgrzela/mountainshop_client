import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductsDetailsComments from './ProductsDetailsComments';
import ProductsDetailsContent from './ProductsDetailsContent';
import ProductsDetailsHeading from './ProductsDetailsHeading';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDisplayedProduct,
  removeDisplayedProduct,
  fetchCommentsForDisplayedProduct,
  fetchPropertiesForDisplayedProduct,
  fetchProducts,
} from '../../../Actions/ActionCreators/Products';
import {
  setSingleProductScrolling,
  skipWelcome,
} from '../../../Actions/ActionCreators/Interface';
import withLoading from '../../../Components/withLoading';

const ProductsDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const products = useSelector((state) => state.products);
  const skipped = useSelector((state) => state.interface.welcomeSkipped);

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
      dispatch(fetchProducts(false));
    }
    dispatch(fetchDisplayedProduct(id));
    dispatch(fetchPropertiesForDisplayedProduct(id));
    dispatch(fetchCommentsForDisplayedProduct(id));

    if (!skipped) {
      dispatch(skipWelcome());
    }

    return () => {
      dispatch(removeDisplayedProduct);
      window.removeEventListener('scroll', onScroll);
    };
  }, [id]);

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

export default withLoading(ProductsDetails, 'Ładowanie produktu');
