import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants"; // named export
import { Link } from "react-router";

export const Header = () => {
  const [LoginBtnState, setLoginBtnState] = useState("Login");

  // if no dependency array => useeffect is called on every render
  // if dependency array is empty = [] => useeffect is called on initail render(just once)
  // if the dependency is LoginBtnState => called on every time when LoginBtnState is updated

  useEffect(() => {
    console.log("useEffect called");
  }, [LoginBtnState]);

  console.log("Header called");

  return (
    <div className="Mainheader">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="Nav-Item">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/contact"}>Cart</Link>
          </li>
          <button
            onClick={() => {
              LoginBtnState === "Login"
                ? setLoginBtnState("Logout")
                : setLoginBtnState("Login");
            }}
          >
            {LoginBtnState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
