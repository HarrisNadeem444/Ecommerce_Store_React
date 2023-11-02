const initialState = {
  cartItems: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItems = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItems) {
        const updatedCart = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cartItems: updatedCart,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
