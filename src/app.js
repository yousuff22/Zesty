import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./pages/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./pages/Contact";
import ErrorCom from "./pages/ErrorCom";
import RestsoMenu from "./components/RestsoMenu";

// How comes  data from the backend

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
        path: "/restaurant/:resId",
        element: <RestsoMenu />,
      },
    ],
    errorElement: <ErrorCom />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
