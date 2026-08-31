import { useRef } from "react";

function UseRefExample() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>useRef Example</h2>

      <input
        ref={inputRef}
        className="form-control mb-2"
        type="text"
        placeholder="Click button to focus"
      />

      <button className="btn btn-primary" onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
}

export default UseRefExample;
