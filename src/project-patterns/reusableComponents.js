/*
===========================================
TOPIC: Reusable Components
===========================================

✅ Definition:
Reusable components are components that can be used
multiple times with different props.
*/

function Button({ label, onClick, color }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, color: "white" }}
    >
      {label}
    </button>
  );
}

function Card({ title, children }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function ReusableComponentExample() {
  return (
    <div>
      <h1>Reusable Components Example</h1>

      <Button
        label="Click Me"
        color="blue"
        onClick={() => alert("Clicked")}
      />

      <Card title="User Info">
        <p>Name: Mayank</p>
      </Card>
    </div>
  );
}

export default ReusableComponentExample;

/*
✅ Interview Points:
- Improves code reusability
- Reduces duplication
- Makes UI consistent
*/