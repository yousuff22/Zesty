import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants"; // named export
import { Link } from "react-router";
import useOnlineStatus from "../utils/customhook/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector, useDispatch } from "react-redux";

export const Header = () => {
  const [LoginBtnState, setLoginBtnState] = useState("Login");

  // if no dependency array => useeffect is called on every render
  // if dependency array is empty = [] => useeffect is called on initail render(just once)
  // if the dependency is LoginBtnState => called on every time when LoginBtnState is updated

  useEffect(() => {}, [LoginBtnState]);

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  

  return (
    <div className="flex justify-between bg-orange-100 shadow-lg m-2 sm:bg-green-200 rounded-3xl">
      <div className="logoContainer">
        <img className="w-30 rounded-3xl" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="px-2">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-2">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-2 font-bold">
            <Link to="/cart">Cart ({cartItems.length} Items )</Link>
          </li>
          <button
            className="px-2"
            onClick={() => {
              LoginBtnState === "Login"
                ? setLoginBtnState("Logout")
                : setLoginBtnState("Login");
            }}
          >
            {LoginBtnState}
          </button>
          <li className="px-2 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
