import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

import "./mealItemForm.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);


  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value; //it will always be string
    const enteredAmountNumber = +enteredAmount; //converting string to number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return setAmountIsValid(false);
    }

    props.onAddToCart(enteredAmountNumber)
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef} //using ref on a custom INPUT component
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid Amount</p>}
    </form>
  );
};

export default MealItemForm;
