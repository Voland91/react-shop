import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, CLEAR_ITEM } from '../constants';

const initialState = {
  items: [],
};

const cart = (state = initialState, action) => {
  const index = state.items.findIndex((item) => item.id === action.id);

  switch (action.type) {
    case ADD_TO_CART: {
      return {
        items:
          (index === -1 && [...state.items, { id: action.id, count: 1 }]) ||
          state.items.map((item, i) =>
            // eslint-disable-next-line no-plusplus
            index === i ? { id: action.id, count: ++item.count } : item,
          ),
      };
    }

    case REMOVE_FROM_CART: {
      return {
        items: state.items.map((item, i) =>
          // eslint-disable-next-line no-plusplus
          index === i ? { id: action.id, count: --item.count } : item,
        ),
      };
    }

    case CLEAR_CART: {
      return initialState;
    }

    case CLEAR_ITEM: {
      return {
        items: state.items.map((item, i) => (index === i ? { id: item.id, count: 0 } : item)),
      };
    }

    default:
      return state;
  }
};

export default cart;
