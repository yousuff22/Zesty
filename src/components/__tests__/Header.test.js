// import { render } from "@testing-library/react";
// import Header from "../Header";
// import appStore from "../../utils/appStore";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom";
// import { fireEvent } from "@testing-library/react/types";

// it("should load header component with a login button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   //   const loginBtn = screen.getByRole("button");
//   const loginBtn = screen.getByText("Login");

//   expect(loginBtn).toInTheDocument();
// });

// it("should load header component with a login button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   //   const loginBtn = screen.getByRole("button");
//   const cartItem = screen.getByText("Cart (0 Items )");

//   expect(cartItem).toInTheDocument();
// });

// it("should change Login Btn to logout on click", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   //   const loginBtn = screen.getByRole("button");
//   const loginBtn = screen.getByRole("button", { name: "Login" });

//   fireEvent.click(loginBtn);

//   const logOutBtn = screen.getByRole("button", { name: "Logout" });

//   expect(logOutBtn).toInTheDocument();
// });
