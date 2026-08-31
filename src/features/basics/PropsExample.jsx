/*
===========================================
TOPIC: Props Example
===========================================

✅ Passing data from parent to child
✅ Props are read-only
===========================================
*/

import { UserGreeting } from "../../../src/components/Greeting";

function PropsExample() {
  return (
    <div>
      <h2>Props Example</h2>

      <UserGreeting name="Mayank" />
      <UserGreeting name="React Developer" />
    </div>
  );
}

export default PropsExample;