import { useState } from "react";
import { useDocument } from "../../hooks/useDocumentTitle";
import {useCounter} from "../../hooks/useCounter"
function BasicCounter() {

  //const [count, setCount] = useState(0);
  // function increment() {
  //   setCount((count) => count + 1);
  // }
  // function decrement() {
  //   setCount((count) => Math.max(0, count - 1));
  // }

  const quantity = useCounter(0);
  //setCount(useCounter(count))
  useDocument(quantity.value)
  return (
    <div>
      <h4>Basic Counter</h4>
      <button onClick={quantity.decrement}>Less</button>
      <output>{quantity.value}</output>
      <button onClick={quantity.increment}>More</button>
    </div>
  );
}

export default BasicCounter;
