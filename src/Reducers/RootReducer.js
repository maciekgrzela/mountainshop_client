import { cartReducer } from './CartReducer';
import { categoriesReducer } from './CategoriesReducer';
import { combineReducers } from 'redux';
import { productsReducer } from './ProductsReducer';
import { userReducer } from './UserReducer';
import { interfaceReducer } from './InterfaceReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  interface: interfaceReducer,
});

export default rootReducer;
