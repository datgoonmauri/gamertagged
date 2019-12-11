import React from "react";
import MessageCard from "./MessageCard";
import { withAsyncAction } from "../HOCs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentSlash } from "@fortawesome/free-solid-svg-icons";
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
    if (this.props.result === null) {
      return <Spinner style={{ display: "flex", justifyContent: "center" }} />;
    }
    if (this.props.result.count === 0) {
      return (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px"
            }}
          >
            <p style={{ marginTop: "15px" }}> You Have No Messages </p>
            <FontAwesomeIcon
              icon={faCommentSlash}
              size="8x"
              style={{ marginTop: "15px", opacity: 0.5 }}
            ></FontAwesomeIcon>
          </div>
        </>
      );
    }
    return (
      this.props.result &&
      this.props.result.messages.map(message => {
        return (
          <MessageCard
            key={message.id}
            username={message.username}
            text={message.text}
            createdAt={message.createdAt}
            id={message.id}
            likes={message.likes}
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
