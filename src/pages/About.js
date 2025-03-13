import React from "react";
import User from "../components/User";
import UserClass from "../components/UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>This is about page</h1>
//       <UserClass name={"Yousuf Sayyed (class)"} location={"Bombay"}/>
//     </div>
//   );
// };

class About extends React.Component {
  constructor(prop) {
    super(prop);
    // console.log("constructor called");
  }

  render() {
    // console.log("parent render called");

    return (
      <div>
        <h1 className="text-center font-bold text-2xl my-5">This is about page class</h1>
        <UserClass name={"Yousuf"} location={"Bombay"} />
      </div>
    );
  }
}

export default About;
