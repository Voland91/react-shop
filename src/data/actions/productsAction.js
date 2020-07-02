import {
  PRODUCTS_GET_REQUEST,
  PRODUCTS_GET_SUCCESS,
  PRODUCTS_GET_FAILURE,
} from "../constants";

import API from "../fetch/";

export const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCTS_GET_REQUEST,
  });

  try {
    const response = await API.products.fetchProducts();
    const data = await response.json();

    dispatch({
      type: PRODUCTS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_GET_FAILURE,
    });
  }
};
