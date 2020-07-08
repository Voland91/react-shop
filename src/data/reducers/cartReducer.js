import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  CLEAR_ITEM,
} from "../constants";

const initialState = {
  itemsCount: 0,
  items: [],
};

const cart = (state = initialState, action) => {
  const index = state.items.findIndex((item) => item.id === action.id);

  switch (action.type) {
    case ADD_TO_CART: {
      return {
        itemsCount: state.itemsCount + 1,
        items:
          (index === -1 && [...state.items, { id: action.id, count: 1 }]) ||
          state.items.map((item, i) =>
            index === i ? { id: action.id, count: ++item.count } : item
          ),
      };
    }

    case REMOVE_FROM_CART: {
      return {
        itemsCount: state.itemsCount - 1,
        items: state.items.map((item, i) =>
          index === i ? { id: action.id, count: --item.count } : item
        ),
      };
    }

    case CLEAR_CART: {
      return initialState;
    }

    case CLEAR_ITEM: {
      return {
        itemsCount: state.items.map((item) => state.itemsCount - item.count),
        items: state.items.map(
          (item, i) =>
            index === i && state.items.splice(i, 1) && console.log(state)
        ),
      };
    }

    default:
      return state;
  }
};

export default cart;
