import { useRef } from "react";
import { Input } from "./Child";

function App() {
  const inputRef = { useRef };

  const focusInput = () => {
    inputRef.current.focus(); // accessing child DOM
  };
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
export default App;
