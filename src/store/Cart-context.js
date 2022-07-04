import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmout: 0,
  addItem: (items) => {},
  removeItem: (id) => {},
//   clearItem: () => {},
//   clearCart: () => {},
});

export default CartContext;