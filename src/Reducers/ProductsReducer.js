import { ADD_PRODUCT, DELETE_PRODUCT } from '../Actions/ActionTypes/Products';

import { initialProductsState } from '../State/state'

export const productsReducer = (state = initialProductsState, action) => {
    switch(action.type){
        case ADD_PRODUCT:
            return {
                products: [...state.products, {name: 'Nowy kolejny produkt'}]
            }
        case DELETE_PRODUCT:
            return {
                products: state.products.slice(0,-1)
            }
        default:
            return state;
    }
}