import {ActionTypes} from "../contants/action-types";

const initialState = {
    products: [{
        id: 1,
        title: "bag",
        category: "containers"
    }]
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionTypes.SELECTED_PRODUCT:
            return state
        case ActionTypes.SET_PRODUCTS:
            return state
        case ActionTypes.REMOVE_PRODUCT:
            return state
        default:
            return state
    }
}