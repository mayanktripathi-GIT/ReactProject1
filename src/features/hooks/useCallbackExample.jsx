/*
===========================================
TOPIC: useCallback Hook
===========================================

✅ Memoizes functions
✅ Prevents unnecessary re-renders
✅ Used with React.memo
===========================================
*/

import { useState, useCallback } from "react";

// ✅ Child component
const ChildComponent = ({ onClick }) => {
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={onClick}>Click Me (Child)</button>
    </div>
  );
};

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  // ✅ Memorized function
  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []); // ✅ IMPORTANT

  return (
    <div>
      <h4>useCallback Example</h4>

      <h3>Count: {count}</h3>

      {/* ✅ Causes parent re-render */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      {/* ✅ Child should NOT re-render unnecessarily */}
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default UseCallbackExample;