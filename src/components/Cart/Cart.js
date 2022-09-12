import React, { useContext, useState } from 'react'; // eslint-disable-line
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import './Cart.css';
import CartContext from '../../store/Cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false); //checkout modal

  const [isSubmitting, setIsSubmitting] = useState(false); //submit modal

  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext); //cart context

  const totalAmount = `₹${cartCtx.totalAmount}`; //total amount

  const hasItems = cartCtx.items.length > 0; //check if cart has items or not

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }; //remove item from cart

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  }; //add item to cart

  const orderHandler = () => {
    setIsCheckout(true)
  } //open checkout modal

  const submitOrderHandler = async (userData) => {

    setIsSubmitting(true);

    await fetch(
      'https://food-app-e4ded-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    });

    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className='cart-items'>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  ); //cart items

  const ModalAction = (
    <div className='action'>
      <button className='button-alt' onClick={props.onClose} >
        Close
      </button >
      {hasItems && <button className='button' onClick={orderHandler}>Order</button>}
    </div >
  ); //modal action

  const cartModalContent = <React.Fragment>
    {cartItems}
    <div className='total'>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
    {!isCheckout && ModalAction}
  </React.Fragment>

  const isSubmittingContent = <React.Fragment>
    <div className='submitting-data-output'> Submitting Data ...</div>
    <button className='button' onClick={props.onClose} >
      Close
    </button >
  </React.Fragment>

  const didSubmittingContent = <React.Fragment>
    <div className='submitting-data-output'> Order Placed successfuly !</div>
    <button className='button' onClick={props.onClose} >
      Close
    </button >
  </React.Fragment>


  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && didSubmit && didSubmittingContent}
    </Modal>
  );
};

export default Cart;