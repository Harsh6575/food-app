import React,{ Fragment } from 'react'; 

import HeaderCartButton from './HeaderCartButton'; 
import './Header.css'; // import css

const Header = (props) => {
  return (
    <Fragment>
      <header className='header'>
        <h1>Food-App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className='main-image'>
        <img src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;