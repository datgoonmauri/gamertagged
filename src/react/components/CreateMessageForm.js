import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import { Form, Button, FormTextarea } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./CreateMessageForm.css";

class CreateMessageForm extends React.Component {
  state = { text: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.postMessage(this.state);
    this.setState({ text: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <Form id="message-form" onSubmit={this.handleLogin}>
          <FormTextarea
            id="textArea"
            maxlength="140"
            placeholder="What's on your mind?"
            type="text"
            name="text"
            autoFocus
            required
            onChange={this.handleChange}
            value={this.state.text}
          />

          <Button type="submit" disabled={loading}>
            Post
          </Button>
        </Form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("messages", "postMessage")(CreateMessageForm);
