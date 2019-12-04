import React from "react";
import { Menu, CreateMessageForm, MessageList } from "../components";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./Profile.css";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <CreateMessageForm />
        <MessageList />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
