/*
===========================================
Reusable Components (Basics)
===========================================

✅ Functional components
✅ Props (destructured)
✅ Arrow function component
✅ Reusable Button component
===========================================
*/

// ✅ 1. Basic Functional Component
function Greeting() {
  return (
    <div>
      <h2>Welcome to React</h2>
    </div>
  );
}

// ✅ 2. Component with Props
function UserGreeting({ name }) {
  return (
    <div>
      <h3>Hello, {name}</h3>
    </div>
  );
}

// ✅ 3. Arrow Function Component
const ArrowComponent = () => {
  return (
    <div>
      <p>This is an Arrow Function Component</p>
    </div>
  );
};

// ✅ 4. Reusable Button Component
function Button({ label, onClick }) {
  return (
    <button
      className="btn btn-outline-primary btn-sm m-1"
      style={{
        borderRadius: "8px",
        padding: "6px 14px",
        margin: "5px",
        fontSize: "14px",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// ✅ Named Exports (Best Practice)
export { Greeting, UserGreeting, ArrowComponent, Button };
