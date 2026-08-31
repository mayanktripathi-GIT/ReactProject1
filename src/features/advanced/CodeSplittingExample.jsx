/*
===========================================
TOPIC: Code Splitting + React.lazy + Suspense
===========================================

✅ Loads components only when needed
✅ Improves performance
✅ Works with React.Suspense
===========================================
*/

import { lazy, Suspense } from "react";

// ✅ Lazy loaded component
const LazyComponent = lazy(() =>
  import("../basics/useStateExample")
);

function CodeSplittingExample() {
  return (
    <div>
      <h2>Code Splitting Example</h2>

      {/* ✅ Suspense fallback */}
      <Suspense fallback={<p>Loading component...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default CodeSplittingExample;