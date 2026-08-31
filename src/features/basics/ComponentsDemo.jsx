/*
===========================================
TOPIC: Components Demo
===========================================

✅ Demonstrates:
- Functional components
- Props
- Arrow components
- Reusable button
===========================================
*/

import {
  Greeting,
  UserGreeting,
  ArrowComponent,
  Button,
} from "../../components/Greeting";

function ComponentsDemo() {
  return (
    <div>
      <h4>React Components Demo</h4>

      {/* ✅ Basic Component */}
      <Greeting />

      {/* ✅ Props Example */}
      <UserGreeting name="Mayank" />

      {/* ✅ Arrow Component */}
      <ArrowComponent />

      {/* ✅ Reusable Button */}
      <Button
        label="Click Me"
        onClick={() => alert("Button Clicked")}
      />
    </div>
  );
}

export default ComponentsDemo;