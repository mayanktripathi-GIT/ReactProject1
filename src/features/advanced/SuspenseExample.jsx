/*
===========================================
TOPIC: React Suspense
===========================================

✅ Handles loading UI for lazy components
✅ Works with React.lazy
✅ Improves user experience
===========================================
*/

import { Suspense, lazy } from "react";

// ✅ Lazy-loaded component
const LazyComponent = lazy(() =>
  import("../basics/JSXExample")
);

function SuspenseExample() {
  return (
    <div>
      <h2>Suspense Example</h2>

      {/* ✅ Fallback UI while loading */}
      <Suspense fallback={<h3>Loading component...</h3>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default SuspenseExample;