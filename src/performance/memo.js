/*
===========================================
TOPIC: React.memo
===========================================

✅ Definition:
React.memo is a higher-order component that prevents
unnecessary re-renders of a component.

👉 It only re-renders when props change.
*/

/*
✅ Interview Points:
- Prevents unnecessary re-renders
- Works with functional components
- Uses shallow comparison of props
- Useful for performance optimization
*/

import React, { useState } from "react";
const Child = React.memo(({name}) => {
  console.log("Child Component");
});

function ReactMemo() {
  const [count, setcount] = useState(0);
  return (
    <>
      <button onClick={() => setcount(count + 1)}>Count: {count}</button>
      <Child name = "mayank"></Child>
      <Child />
    </>
  );
}
export default ReactMemo;