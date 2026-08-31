/*
===========================================
TOPIC: useEffect Hook
===========================================

✅ Handles side effects in React
✅ Runs after render
✅ Dependency array controls execution
✅ Can include cleanup function
===========================================
*/

import { useEffect, useState } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  // ✅ Runs on mount + when count changes
  useEffect(() => {
    console.log("Component Updated. Count:", count);

    // ✅ Cleanup function
    return () => {
      console.log("Cleanup before next effect");
    };
  }, [count]);

  return (
    <div>
      <h2>useEffect Example</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default UseEffectExample;