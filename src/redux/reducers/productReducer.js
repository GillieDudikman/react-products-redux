import {ActionTypes} from "../contants/action-types";

const initialState = {
    products: [
    ]
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionTypes.SELECTED_PRODUCT:
            return state
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case ActionTypes.REMOVE_PRODUCT:
            return state
        default:
            return state
    }
}