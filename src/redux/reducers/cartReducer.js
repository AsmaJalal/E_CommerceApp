import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      // Check if the item is already in the cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        // If it's already in the cart, update the quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If it's not in the cart, add it
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      const productId = action.payload;
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== productId
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    default:
      return state;
  }
};

export default cartReducer;
