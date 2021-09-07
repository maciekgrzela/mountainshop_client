import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsViewProduct from './ProductsViewProduct';
import { setProductsFilterProperty } from '../../../Actions/ActionCreators/Products';
import ProductsViewSelectedCategory from './ProductsViewSelectedCategory';
import { FiShoppingBag } from 'react-icons/fi';
import ListEmptyPlaceholder from '../../../Components/Common/ListEmptyPlaceholder';
import ProductsViewControls from './ProductsViewControls';
import withLoading from '../../../Components/withLoading';

const ProductsViewProducts = ({
  products,
  viewType,
  setListView,
  setGridView,
  handleSortingOptions,
}) => {
  const dispatch = useDispatch();
  const pageNumber = useSelector(
    (state) => state.products.filterForDisplayedProducts.pageNumber
  );
  const category = useSelector((state) => state.categories.selectedCategory);

  const handleLoadMore = () => {
    dispatch(setProductsFilterProperty('pageNumber', pageNumber + 1));
  };

  useEffect(() => {
    dispatch(setProductsFilterProperty('pageNumber', 1));
  }, []);

  return (
    <div className='products-view__products-wrapper'>
      {category !== null && (
        <ProductsViewSelectedCategory category={category} />
      )}
      <ProductsViewControls
        handleSortingOptions={handleSortingOptions}
        setGridView={setGridView}
        setListView={setListView}
        viewType={viewType}
        small
      />
      {products.length === 0 ? (
        <ListEmptyPlaceholder />
      ) : (
        <div
          className={`products-view__products products-view__products--${viewType}`}
        >
          {products.map((product) => (
            <ProductsViewProduct
              key={product.id}
              product={product}
              viewType={viewType}
            />
          ))}
          <button
            className='products-view__load-more load-more'
            onClick={handleLoadMore}
          >
            <FiShoppingBag className='load-more__icon' />
            <span className='load-more__text'>Zobacz więcej produktów</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default withLoading(ProductsViewProducts, 'Ładowanie produktów');
