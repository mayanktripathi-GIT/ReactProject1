/*
===========================================
TOPIC: Higher-Order Component (HOC)
===========================================

✅ A function that takes a component
✅ Returns a new enhanced component
✅ Used for logic reuse
===========================================
*/

// ✅ HOC Function
function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Props:", props);

    return <WrappedComponent {...props} />;
  };
}

// ✅ Base Component 1
function Hello({ name }) {
  return <h3>Hello {name}</h3>;
}

// ✅ Base Component 2 (to show reuse)
function Welcome({ name }) {
  return <h3>Welcome {name}</h3>;
}

// ✅ Enhanced Components
const HelloWithLogger = withLogger(Hello);
const WelcomeWithLogger = withLogger(Welcome);

// ✅ Main Example Component
function HOCExample() {
  return (
    <div>
      <h2>HOC Example</h2>

      <HelloWithLogger name="Mayank" />
      <WelcomeWithLogger name="Developer" />
    </div>
  );
}

export default HOCExample;
