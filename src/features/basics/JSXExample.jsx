/*
===========================================
TOPIC: JSX (JavaScript XML)
===========================================

✅ JSX allows writing HTML inside JavaScript
✅ It must return a single parent element
✅ Use {} to write JS inside JSX
===========================================
*/

const JSXExample = () => {
  const name = "Mayank";
  const isLoggedIn = true;

  return (
    <div>
      <h2>JSX Example</h2>

      {/* ✅ JavaScript expression */}
      <p>Hello, {name}</p>

      {/* ✅ Conditional rendering */}
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please login</p>
      )}

      {/* ✅ Inline styles */}
      <p style={{ color: "blue" }}>
        This is styled using JSX
      </p>
    </div>
  );
};

export default JSXExample;