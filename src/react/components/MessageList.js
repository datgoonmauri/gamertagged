import React from "react";
import MessageCard from "./MessageCard";
import { withAsyncAction } from "../HOCs";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class MessageList extends React.Component {
  componentDidMount() {
    this.props.getMessages(this.props.username);
  }

  render() {
    return (
      this.props.result &&
      this.props.result.messages.map(message => {
        return (
          <MessageCard
            key={message.id}
            username={message.username}
            text={message.text}
            createdAt={message.createdAt}
          />
        );
      })
    );
  }
}

/*
mapStateToProps
  loading
  error
  result

mapDispatchToProps
  getMessages
*/
export default withAsyncAction("messages", "getMessages")(MessageList);
