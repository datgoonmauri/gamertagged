import React from "react";
import MessageCard from "./MessageCard";
import { withAsyncAction } from "../HOCs";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./MessageList.css";
import { Spinner } from ".";

class MessageList extends React.Component {
  componentDidMount() {
    this.props.getMessages(this.props.username);
  }

  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      this.props.getMessages(this.props.username);
    }
  }
  render() {
    // if (this.props.result.count === 0) {
    //   return <p> You Have No Messages </p>;
    // }

    if (this.props.result === null) {
      return <Spinner style={{ display: "flex", justifyContent: "center" }} />;
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
              messageId={message.id}
            />
          </div>
        );
      })
    );
  }
}

export default withAsyncAction("messages", "getMessages")(MessageList);
