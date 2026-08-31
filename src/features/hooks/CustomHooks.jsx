
/*
===========================================
TOPIC: Custom Hooks
===========================================

✅ Definition:
Custom hooks are reusable functions that use
Re
*/


/*
✅ Interview Points:
- Must start with "use"
- Helps reuse logic
- Can use other hooks inside
*/


import  {useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
}
export default useCounter;