import { ADD_TO_CART } from "../constants";

const initialState = {
  itemsCount: 0,
  items: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const index = state.items.findIndex((item) => item.id === action.id);

      return {
        itemsCount: state.itemsCount + 1,
        items:
          (index === -1 && [...state.items, { id: action.id, count: 1 }]) ||
          state.items.map((item, i) =>
            index === i ? { id: action.id, count: ++item.count } : item
          ),
      };
    }

    default:
      return state;
  }
};

export default cart;
