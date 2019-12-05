import React from "react";
import { Menu, MessageList, CreateMessageForm } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./MessageFeed.css";

class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        {/* <h2 style={{ margin: "auto" }}>Message Feed</h2> */}
        <div class="wrapper">
          <CreateMessageForm />
        </div>
        <MessageList />
      </>
    );
  }
}

// 2 things: automatically redirect to Home page if you do not have login credentials
// add isAuthenticated prop
export default userIsAuthenticated(MessageFeed);
