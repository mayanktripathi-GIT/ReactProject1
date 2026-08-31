/*
===========================================
TOPIC: Prop Drilling
===========================================

✅ Passing data through multiple components
✅ Problem: Unnecessary intermediate components
===========================================
*/

// ✅ Grandchild Component
function Grandchild({ user }) {
  return <h3>👋 Hello {user}</h3>;
}

// ✅ Child Component
function Child({ user }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h4>Child Component</h4>
      <Grandchild user={user} />
    </div>
  );
}

// ✅ Parent Component
function Parent({ user }) {
  return (
    <div style={{ border: "1px solid blue", padding: "10px" }}>
      <h4>Parent Component</h4>
      <Child user={user} />
    </div>
  );
}

// ✅ Root Example
function PropDrillingExample() {
  return (
    <div>
      <h2>Prop Drilling Example</h2>

      <Parent user="Mayank" />
    </div>
  );
}

export default PropDrillingExample;