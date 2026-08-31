
/*
===========================================
TOPIC: Lazy Loading
===========================================

✅ Definition:
Lazy loading loads components only when needed,
reducing initial bundle size.
*/

/*
✅ Interview Points:
- Uses React.lazy + Suspense
- Improves initial load performance
- Loads components on demand
*/

import React, { Suspense } from "react";

/*
✅ Lazy Component
*/
const LazyComponent = React.lazy(() =>
  import("../02-hooks/useState")
);

function LazyLoadingExample() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>

      <Suspense fallback={<h2>Loading Component...</h2>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default LazyLoadingExample;
