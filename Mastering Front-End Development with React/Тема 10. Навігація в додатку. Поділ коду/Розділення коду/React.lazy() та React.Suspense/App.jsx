// // Без поділу коду

// import MyComponent from "path/to/MyComponent";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/some-path" element={<MyComponent />} />
//       {/* Інші маршрути */}
//     </Routes>
//   );
// };

// import("path/to/MyComponent").then((module) => console.log(module));

// З поділом коду

import { lazy, Suspense } from "react";

const MyComponent = lazy(() => import("path/to/MyComponent"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/some-path" element={<MyComponent />} />
        {/* Інші маршрути */}
      </Routes>
    </Suspense>
  );
};
