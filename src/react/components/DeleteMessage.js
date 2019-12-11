import React from "react";
import { Button } from "shards-react";
import "./DeleteMessage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { withAsyncAction, connect } from "../HOCs";

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
        <Button
          outline
          className="delete"
          theme="danger"
          size="sm"
          onClick={this.handleDeleteMessage}
        >
          <FontAwesomeIcon icon={faTrashAlt} size="lg"></FontAwesomeIcon>
        </Button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("messages", "deleteMessage")(DeleteMessage)
);
