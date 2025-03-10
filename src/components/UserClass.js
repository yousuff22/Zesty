import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };

    // console.log("constructor called");
  }
  async componentDidMount() {
    // console.log("CDid Mount");
    const data = await fetch("https://api.github.com/users/yousuf-22");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // console.log("parent render called");

    // const { name, location } = this.props;
    // const { count } = this.state;

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>Count {count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button> */}
        <img
          className="user-image"
          src="https://avatars.githubusercontent.com/u/175668381?v=4"
        ></img>
        <h1>Name: {name}</h1>
        <p>Location: {location}</p>
        <p>contact: yousuf@contact</p>
      </div>
    );
  }
}

export default UserClass;
