import { ADD_TO_CART } from "../constants";

const initialState = { itemsCount: 0 };

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        itemsCount: state.itemsCount + 1,
      };

    default:
      return state;
  }
};

export default cart;
