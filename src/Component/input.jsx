import { useState } from "react";

const Input = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <label htmlFor="num">Number: {number}</label> <br />
      <input 
        type="button" 
        value="Increment" 
        onClick={increment} 
        style={{ margin: '5px', padding: '5px 10px' }}
      />
      <input 
        type="button" 
        value="Decrement" 
        onClick={decrement} 
        style={{ margin: '5px', padding: '5px 10px' }}
      />
    </>
  );
};

export default Input;

  