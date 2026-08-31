/*
===========================================
TOPIC: useState Hook
===========================================

✅ useState is used to manage state in functional components
✅ State updates trigger re-render
===========================================
*/

import { useState } from "react";
import { Button } from "../../components/Greeting";

function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useState Example</h2>

      <h4>Count: {count}</h4>

      {/* ✅ Increment */}
      <Button
        label="Increment"
        onClick={() => setCount(count + 1)}
      />

      {/* ✅ Decrement */}
      <Button
        label="Decrement"
        onClick={() => setCount(count - 1)}
      />

      {/* ✅ Reset */}
      <Button
        label="Reset"
        onClick={() => setCount(0)}
      />
    </div>
  );
}

export default UseStateExample;