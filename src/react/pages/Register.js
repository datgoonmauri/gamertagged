import React from "react";
import { RegisterForm, Menu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import "./Home.css";
import {Link} from "react-router-dom"
class Register extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h1>GamerTagged</h1>
        <h2>Register for a New Account</h2>
        <RegisterForm />
        <h4>
          <Link to="/">Go Back Home</Link>
        </h4>
      </>
    );
  }
}

export default userIsNotAuthenticated(Register);
