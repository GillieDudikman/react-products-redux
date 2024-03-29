import {ActionTypes} from '../contants/action-types'
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const noData = () => {
    return{
        type: ActionTypes.NO_DATA,
        payload: {
            title: "no data"
        }
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_PRODUCT,
    }
}