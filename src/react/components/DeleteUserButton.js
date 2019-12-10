import React from "react";
// import { Spinner } from ".";
import { withAsyncAction, connect } from "../HOCs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class DeleteUserButton extends React.Component {
  handleDeleteUser = e => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmed) {
      this.props.deleteUser();
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.props.username === this.props.loggedInUsername && (
          <Button 
            outline
            theme="danger"
            size="sm"
            onClick={this.handleDeleteUser}
          >
            <FontAwesomeIcon icon={faTrashAlt} size="lg"></FontAwesomeIcon>{" "}
            Delete Your Account
          </Button>
        )}
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
  withAsyncAction("users", "deleteUser")(DeleteUserButton)
);
