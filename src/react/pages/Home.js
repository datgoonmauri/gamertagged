import React from "react";
import { LoginForm, Menu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import "./Home.css";
import {Link} from "react-router-dom"; 
class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h1>Kwitter</h1>
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <h4>Don't have an account? <Link to="/Register">Register Here!</Link> </h4>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
