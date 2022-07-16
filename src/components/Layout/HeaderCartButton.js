import React,{ useContext, useEffect, useState } from 'react'; // import React's hooks from react

import CartIcon from '../Cart/CartIcon'; // import CartIcon from src/components/Cart/CartIcon.js
import CartContext from '../../store/Cart-context'; // import CartContext from src/store/Cart-context.js
import './HeaderCartButton.css'; // import css

const HeaderCartButton = (props) => { 
  // create HeaderCartButton component
  
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false); // create state for btnIsHighlighted
  
  const cartCtx = useContext(CartContext); // create cartCtx

  const { items } = cartCtx; // get items from cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => { 
    return curNumber + item.amount; 
  }, 0); // get number of cart items

  const btnClasses = `${'button'} ${btnIsHighlighted ? 'bump' : ''}`; // create btnClasses

  useEffect(() => {
    if (items.length === 0) {
      return; // return if no items in cart
    } 

    setBtnIsHighlighted(true); // set btnIsHighlighted to true

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false); // set btnIsHighlighted to false
    }, 300); // set timer to 300ms

    return () => {
      clearTimeout(timer); // clear timer
    }; // return function to clear timer
  }, [items]); // run useEffect when items changes

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;