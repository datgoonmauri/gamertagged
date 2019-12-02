import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import { Button, Form, FormInput, FormGroup } from "shards-react";
import "./LoginForm.css";

class CreateMessageForm extends React.Component {
  state = { text: ""  };

  handleLogin = e => {
    e.preventDefault();
    this.props.postMessage(this.state);
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
            <label htmlFor="text">Your Message</label>
            <FormInput
              type="text"
              name="text"
              autoFocus
              required
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button theme="primary" type="submit" disabled={loading} id="submit">
            Submit Message
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

export default withAsyncAction("messages", "postMessage")(CreateMessageForm);

