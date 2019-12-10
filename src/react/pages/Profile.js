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
        <div className="container">
          <div className="UserCard">
            <UserCard username={this.props.match.params.username} />
          </div>
          <div className="MessageList">
            <h4 style={{ margin: "auto" }}> Your Posts </h4>{" "}
            <MessageList username={this.props.match.params.username} />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
