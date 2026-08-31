/*
===========================================
TOPIC: React Coding Questions
===========================================
*/

import { useState } from "react";

/*
✅ Question 1: Counter App
*/
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

/*
✅ Question 2: Toggle Visibility
*/
function Toggle() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Hello World</p>}
    </div>
  );
}

/*
✅ Question 3: Input Handling
*/
function InputExample() {
  const [text, setText] = useState("");

  return (
    <div>
      <input onChange={e => setText(e.target.value)} />
      <h3>{text}</h3>
    </div>
  );
}

/*
✅ Main Component
*/
function CodingQuestionsExample() {
  return (
    <div>
      <h1>React Coding Practice</h1>
      <Counter />
      <Toggle />
      <InputExample />
    </div>
  );
}

export default CodingQuestionsExample;

/*
✅ Interview Points:
- Focus on logic clarity
- Use hooks properly
- Keep code clean
*/