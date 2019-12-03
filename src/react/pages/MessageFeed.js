import React from "react";
import {  Menu, MessageList ,MessageCard} from "../components";
import { userIsAuthenticated } from "../HOCs";

class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
		<h2>Message Feed</h2>
		<MessageCard />
		<MessageList />
      </>
    );
  }
}

// 2 things: automatically redirect to Home page if you do not have login credentials
// add isAuthenticated prop
export default userIsAuthenticated(MessageFeed);
