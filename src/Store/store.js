import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../Reducers/RootReducer';
import thunkMiddleware from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
