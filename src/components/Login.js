import React from "react";
import { Redirect } from "react-router-dom";
import { Button, Label } from "reactstrap";
import "../styles/Login.css";

export default function Login(props) {
  let handleUsername = username => {
    props.setState({
      ...props.state,
      username: username.target.value,
      mainErr: ""
    });
  };

  let handlePassword = password => {
    props.setState({
      ...props.state,
      password: password.target.value,
      mainErr: ""
    });
  };
  let login = async () => {
    if (props.state.username === "") {
      props.setState({ ...props.state,usernameError: "Enter username" });
      return;
    }
    if (props.state.password === "") {
      props.setState({ ...props.state,passwordError: "Enter password" });
      return;
    }

    const user = "Manager";
    const pass = props.state.password;
    try {
      if (
        user.localeCompare(
          "Manager" | "ItalianChef" | "BakeryChef" | "IndianChef"
        ) &&
        pass.localeCompare(
          "Manager" | "ItalianChef" | "BakeryChef" | "IndianChef"
        )
      ) {
        props.setState({
          ...props.state,
          username: user,
          dashboard: true
        });
      }
    } catch (error) {
      if (error.response.status === 500) {
        props.setState({
          ...props.state,mainErr: "Username is wrong!"
        });
      } else if (error.response.status === 401) {
        props.setState({
          ...props.state,mainErr: "Password is incorrect!"
        });
      }
    }
  };

  if (props.state.dashboard === true) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="Main_Div">
      <div className="Login_Div">
        <div className="Login_Elements">
          <h1 className="Login_Text">Log In</h1>
          <br />
          <input
            className="User_Input"
            type="text"
            label="Username"
            placeholder="Username"
            onChange={(username, type) => handleUsername(username)}
          />
          <Label>
            {props.state.username === "" ? props.state.usernameError : ""}
          </Label>
          <br />
          <input
            className="User_Input"
            type="password"
            label="Password"
            placeholder="Password"
            onChange={password => handlePassword(password)}
          />
          <Label>
            {props.state.password === "" ? props.state.passwordError : ""}
          </Label>
          <br />
          <div className="Button_MainErr">
            <Label className="Main_Err">{props.state.mainErr}</Label>
            <Button className="Button" onClick={login}>
              Log In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
