import PropDrillingExample from "../features/advanced/PropDrillingExample";
import HOCExample from "../features/advanced/HOCExample";
import CodeSplittingExample from "../features/advanced/CodeSplittingExample";
import SuspenseExample from "../features/advanced/SuspenseExample";

function AdvancedPage() {
  return (
    <div className="container mt-4">
      <h1 className="text-danger mb-4">Advanced Concepts</h1>

      <div className="card p-3 mb-3">
        <PropDrillingExample />
      </div>

      <div className="card p-3 mb-3">
        <HOCExample />
      </div>

      <div className="card p-3 mb-3">
        <CodeSplittingExample />
      </div>

      <div className="card p-3 mb-3">
        <SuspenseExample />
      </div>
    </div>
  );
}

export default AdvancedPage;
