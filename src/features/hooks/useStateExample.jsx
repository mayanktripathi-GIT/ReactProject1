/*
===========================================
TOPIC: useState Hook
===========================================

✅ Definition:
useState is used to manage state in functional components.

✅ Syntax:
const [state, setState] = useState(initialValue);
*/
import { useState } from "react";
function UsestateExample() {
  const [state, setState] = useState(0);

  return (
    <div>
      <h4>state: {state}</h4>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setState(state - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
export default UsestateExample;
