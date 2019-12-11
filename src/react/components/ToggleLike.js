import React from "react";
import { Button } from "shards-react";
import "./DeleteMessage.css";
import { withAsyncAction } from "../HOCs";

class ToggleLike extends React.Component {
  handleLike = event => {
    console.log("liked!");
    this.props.addLike(this.props.messageId);
  };

  render() {
    return (
      <React.Fragment>
        <Button
          outline
          className="like"
          theme="primary"
          size="sm"
          onClick={this.handleLike}
        >
          Like/Unlike
        </Button>
      </React.Fragment>
    );
  }
}

export default withAsyncAction("likes", "addLike")(ToggleLike);
