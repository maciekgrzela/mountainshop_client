import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../Actions/ActionCreators/Categories';
import ProductsAsideFilters from './ProductsAsideFilters';
import ProductsCategoriesListItems from './ProductsCategoriesListItems';
import withLoading from '../../../Components/withLoading';

const ProductsAside = () => {
  const categories = useSelector((state) => state.categories.categories);
  const totalPages = useSelector((state) => state.categories.totalPages);
  const currentPage = useSelector(
    (state) => state.categories.filter.pageNumber
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [currentPage]);

  return (
    <aside className='products-aside categories-list'>
      <h3 className='categories-list__header'>Wybierz kategorię</h3>
      <ProductsCategoriesListItems
        currentPage={currentPage}
        totalPages={totalPages}
        categories={categories}
      />
      <h3 className='categories-list__header mt-3'>Filtruj produkty</h3>
      <ProductsAsideFilters />
    </aside>
  );
};

export default withLoading(ProductsAside, 'Ładowanie kategorii');
