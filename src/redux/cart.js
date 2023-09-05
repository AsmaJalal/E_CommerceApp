import { createStore } from 'redux';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Handle adding a product to the cart
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      // Handle removing a product from the cart
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };
    // Other cart-related actions can be added here
    default:
      return state;
  }
};

const store = createStore(cartReducer);

export default store;
