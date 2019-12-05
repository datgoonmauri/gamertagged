import React from "react";
import MessageCard from "./MessageCard";
import { withAsyncAction } from "../HOCs";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./MessageList.css";

class MessageList extends React.Component {
  componentDidMount() {
    this.props.getMessages(this.props.username);
  }

  render() {
    if (this.props.result === null) {
      return <p>You Don't Have any Posts yet</p>;
    }
    return (
      this.props.result &&
      this.props.result.messages.map(message => {
        return (
          <div className="MessageCard">
            <MessageCard
              key={message.id}
              username={message.username}
              text={message.text}
              createdAt={message.createdAt}
            />
          </div>
        );
      })
    );
  }
}

export default withAsyncAction("messages", "getMessages")(MessageList);
