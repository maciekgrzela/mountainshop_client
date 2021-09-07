import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  setProductsFilterProperty,
  setProductsFilterProperties,
} from '../../../Actions/ActionCreators/Products';
import { fetchProducers } from '../../../Actions/ActionCreators/Producers';
import { changeProductsViewType } from '../../../Actions/ActionCreators/Interface';
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

  const preparePropertiesObjectWithActiveProp = (activeProp) => {
    const propObject = {
      grossPriceAsc: null,
      grossPriceDesc: null,
      bestRatingDesc: null,
      commentsCountDesc: null,
    };

    propObject[activeProp] = true;

    return propObject;
  };

  const handleSortingOptions = (e) => {
    dispatch(
      setProductsFilterProperties(
        preparePropertiesObjectWithActiveProp(
          e.target.options[e.target.options.selectedIndex].value
        )
      )
    );
  };

  const setGridView = () => {
    dispatch(changeProductsViewType('grid'));
  };

  const setListView = () => {
    dispatch(changeProductsViewType('list'));
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    dispatch(fetchProducts(false));
    dispatch(fetchProducers());
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
    dispatch(fetchProducts(true));
  }, [products.filterForDisplayedProducts]);

  return (
    <main className='products-view'>
      <ProductsViewHeading
        setListView={setListView}
        setGridView={setGridView}
        handleSortingOptions={handleSortingOptions}
        selectedCategory={categories.selectedCategory}
        viewType={productsViewType}
      />
      <ProductsViewProducts
        setListView={setListView}
        setGridView={setGridView}
        handleSortingOptions={handleSortingOptions}
        products={products.displayedProducts}
        viewType={productsViewType}
      />
    </main>
  );
};

export default ProductsView;
