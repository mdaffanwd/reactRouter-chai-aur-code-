import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
} from "react-router-dom";
import {
  About,
  Contact,
  Github,
  githubInfoLoader,
  Home,
  User,
} from "./components/Importing";

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {path:'/contact', element: <Contact />}
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route loader={githubInfoLoader} path="/Github" element={<Github />} />
      <Route path="/user" element={<User />}>
        <Route path="/user/:userid" element={<User />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
