import CartContext from "./Cart-context";

const CartProvider = (props) => {
  const addItemsToCart = (items) => {};

  const removeItemFromCart = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: (items) => addItemsToCart,
    removeItem: (id) => removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
