import React from "react";
import { Menu, CreateMessageForm, MessageList, UserCard } from "../components";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./Profile.css";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
      
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2> </h2>
       
        <UserCard className="userCard"/>

        <CreateMessageForm />
        <MessageList />
        
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
