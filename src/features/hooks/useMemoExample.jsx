/*
===========================================
TOPIC: useMemo Hook
===========================================

✅ Memoizes expensive calculations
✅ Prevents unnecessary recalculations
✅ Improves performance
===========================================
*/

import { useState, useMemo } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ✅ Simulating heavy computation
  function expensiveCalculation(num) {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // heavy loop
    return num * 2;
  }

  // ✅ Memoized value
  const result = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div className="d-flex gap-2 align-items-center flex-wrap">
      <h4>useMemo Example</h4>

      <h3>Result: {result}</h3>

      {/* ✅ Only this triggers calculation */}

      {/* ✅ This should NOT trigger calculation */}
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Type here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
    </div>
  );
}

export default UseMemoExample;
