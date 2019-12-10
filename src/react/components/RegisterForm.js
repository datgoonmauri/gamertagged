import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import { Button, Form, FormInput, FormGroup } from "shards-react";
import "./LoginForm.css";

import { connect } from "../HOCs";

class RegisterForm extends React.Component {
  state = { username: "", password: "", displayName: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.postUser(this.state);
  };


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <Form id="login-form" onSubmit={this.handleLogin}>
          <FormGroup>
            <label htmlFor="username">Username</label>
            <FormInput
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="displayName">Display Name</label>
            <FormInput
              type="text"
              name="displayName"
              autoFocus
              required
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password</label>
            <FormInput
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button theme="primary" type="submit" disabled={loading} id="submit">
            Register
          </Button>
        </Form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && (
          <p id="error" style={{ color: "red" }}>
            {error.message}
          </p>
        )}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("users", "postUser")(RegisterForm);

