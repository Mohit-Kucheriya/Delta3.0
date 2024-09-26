// // Normal Counter function JS
// let count = 0;
// function increaseCount() {
//   count = count + 1;
//   console.log(`Count = ${count}`);
// }

import { useState } from "react";

// export default function Counter() {
//   return (
//     <div>
//       <button onClick={increaseCount}>Count = {count}</button>
//     </div>
//   );
// }

export default function Counter() {
  // Here 0 is the initial Value

  // let [stateVaraible, setStateVaraible] = useState(0)
  let [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}
