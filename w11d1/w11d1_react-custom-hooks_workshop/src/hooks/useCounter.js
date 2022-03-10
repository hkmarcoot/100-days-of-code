//import { useEffect } from "react";
import { useState} from "react";
   

 export const useCounter = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue(c => c + 1);
  const decrement = () => setValue(c => c - 1);
 

  return { value, increment, decrement};
};

//     useEffect(()=>{
        
//         function increment() {
//      return count + 1;
//   }
//   function decrement() {
//     return Math.max(0, count - 1);
//   } 
//     }, [count])

 
// }