import React from "react";
// import { withAsyncAction } from "../HOCs";
import {  Button } from "shards-react";
import "./DeleteMessage.css";
import { withAsyncAction } from "../HOCs";

class DeleteMessage extends React.Component {
    handleDeleteMessage = event => {
      const confirmed = window.confirm(
        "Are you sure you want to delete your post?"
      );
      if (confirmed) {
          this.props.deleteMessage(this.props.messageId);
      }
    };
  
    render() {
      return (
        <React.Fragment>
          <Button onClick={this.handleDeleteMessage}>Delete Post</Button>
        </React.Fragment>
      );
    }
  }
export default withAsyncAction("messages", "deleteMessage") (DeleteMessage);