import {
  LOADING_STATES,
  PRODUCTS_GET_REQUEST,
  PRODUCTS_GET_SUCCESS,
  PRODUCTS_GET_FAILURE,
} from "../constants";

const initialState = {
  loadingState: {},
  products: [],
};

const products = (state = initialState, action) => {
  const newLoadingState = { ...state.loadingState };

  switch (action.type) {
    case PRODUCTS_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };

    case PRODUCTS_GET_SUCCESS:
      delete newLoadingState.PRODUCTS_GET_REQUEST;

      return {
        ...state,
        products: action.payload,
        loadingState: newLoadingState,
      };

    case PRODUCTS_GET_FAILURE:
      delete newLoadingState.PRODUCTS_GET_REQUEST;

      return {
        ...state,
        products: [],
        loadingState: newLoadingState,
      };

    default:
      return state;
  }
};

export default products;
