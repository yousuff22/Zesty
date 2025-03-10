import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./pages/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./pages/Contact";
import ErrorCom from "./pages/ErrorCom";
import RestsoMenu from "./components/RestsoMenu";

// How comes  data from the backend

// chunking
// code spliting
// dynamic bundling
// lazy loading
// onDemand loading
// dynamic import

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* If path = "/" => <Body/> */}
      {/* If path = "/about" => <About/> */}
      {/* If path = "/contact" => <Contact/> */}
      <Outlet />
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          // <Suspense fallback={<h1>Loading ... </h1>}>
          // </Suspense>
            <Grocery />
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestsoMenu />,
      },
    ],
    errorElement: <ErrorCom />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
