import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./pages/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./pages/Contact";
import ErrorCom from "./pages/ErrorCom";
import RestsoMenu from "./components/RestsoMenu";
import UserContext from "./utils/UserContext";

// How comes  data from the backend

// chunking
// code spliting
// dynamic bundling
// lazy loading
// onDemand loading
// dynamic import

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userName, setuserName] = useState();

  //
  useEffect(() => {
    // making a api call for the user data
    const data = {
      UserName: "Yousuf Sayyed",
    };

    setuserName(data.UserName);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="App">
        <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
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
