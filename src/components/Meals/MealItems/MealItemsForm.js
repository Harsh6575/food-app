import React,{ useRef, useState } from "react"; // import React's hooks from react

import Input from "../../UI/Input"; // import Input from src/UI/Input.js
import "./MealItemsForm.css"; // import css

const MealItemForm = (props) => { 
  // create MealItemForm component
  const [amountIsValid, setAmountIsValid] = useState(true); // create state for amountIsValid

  const amountInputRef = useRef(); // create ref for amountInput

  const submitHandler = (event) => { 
    // create submitHandler
    
    event.preventDefault(); // prevent default behavior of form

    const enteredAmount = amountInputRef.current.value; // get value of amountInput
    const enteredAmountNumber = +enteredAmount; // convert to number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 50
    ) {
      setAmountIsValid(false); 
      return; // return if amount is not valid
    }

    props.onAddToCart(enteredAmountNumber); // call onAddToCart prop with enteredAmountNumber
  }; 

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "50",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-50 ).</p>}
    </form>
  );
};

export default MealItemForm;
