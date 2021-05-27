import { ADD_PRODUCT, DELETE_PRODUCT, MODIFY_PRODUCT } from "../ActionTypes/Products";

export const addProduct = () => {
    return {
        type: ADD_PRODUCT
    }
}

export const modifyProduct = () => {
    return {
        type: MODIFY_PRODUCT
    }
}

export const deleteProduct = () => {
    return {
        type: DELETE_PRODUCT
    }
}