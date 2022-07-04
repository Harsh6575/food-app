import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App(props) {

  const[cardIsShown,SetCardIsShown] = useState(false);

  const showCardHandler=()=>{
    SetCardIsShown(true);
  }

  const hideCardHandler=()=>{
    SetCardIsShown(false);
  }

  return (
    <CartProvider>
      {cardIsShown && <Cart onClose={hideCardHandler}/>}
      <Header onShowCart={showCardHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
