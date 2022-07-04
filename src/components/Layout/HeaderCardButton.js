import CartIcon from '../Cart/CartIcon';
import './HeaderCardButton.css';

const HeaderCartButton = (props) => {
  return (
    <button className='button' onClick={props.onClick}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>3</span>
    </button>
  );
};

export default HeaderCartButton;