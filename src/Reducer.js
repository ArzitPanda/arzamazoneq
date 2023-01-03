const reducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      const updatedCart = [...state.userCart];

      const index = updatedCart.findIndex(
        (elem) => elem._id === action.payload._id
      );
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else if (index >= 0) {
        const newItem = { ...updatedCart[index] };
        newItem.quantity++;
        updatedCart[index] = newItem;
      }
      return { ...state, userCart: updatedCart };
    case "local_state":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default reducer;
