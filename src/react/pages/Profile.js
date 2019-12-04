import React from "react";
import { Menu, MessageList, UserCard } from "../components";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./Profile.css";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div class="container">
          <div class="UserCard">
            <UserCard username={this.props.match.params.username} />
          </div>
          <div class="MessageList">
            {" "}
            <MessageList />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
