import React from "react";
import MessageCard from "./MessageCard";
import { withAsyncAction, connect } from "../HOCs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentSlash } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./MessageList.css";
import { Spinner } from ".";
import {getMoreMessages} from "../../redux/actionCreators";
import InfiniteScroll from "react-infinite-scroller";

class MessageList extends React.Component {
  componentDidMount() {
    this.props.getMessages(this.props.username);
  }

  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      this.props.getMessages(this.props.username);
    }
  }
  loadMore = () => {
    this.props.getMoreMessages(this.props.username);
  };

  hasMore = () => {
    return (
      this.props.result &&
      this.props.result.messages.length < this.props.result.count
    );
  };


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
      <InfiniteScroll
      pageStart={0}
      loadMore={this.loadMore}
      hasMore={this.hasMore()}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >

      {this.props.result &&
      this.props.result.messages.map(message => {
        return (
          <div className="MessageCard">
            <MessageCard
              key={message.id}
              username={message.username}
              text={message.text}
              createdAt={message.createdAt}
              id={message.id}
              likes={message.likes}
            />
          </div>
        );
      })}
      </InfiniteScroll>
    );
  }
}
const mapDispatchToProps = {
  getMoreMessages
};
export default connect(
  null,
  mapDispatchToProps
)(withAsyncAction("messages", "getMessages")(MessageList));
