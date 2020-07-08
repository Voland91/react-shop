import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  CLEAR_ITEM,
} from "../constants";

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id: id,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const clearItem = (id) => ({
  type: CLEAR_ITEM,
  id: id,
});
