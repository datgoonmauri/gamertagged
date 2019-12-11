import React from "react";
import { withAsyncAction, connect } from "../HOCs";

class UploadUserPic extends React.Component {
  handleUploadUserPic = event => {
    console.log("upload activated");
    event.preventDefault();
    this.props.putUserPic(event.target);
  };
  render() {
    return (
      this.props.username === this.props.loggedInUsername && (
        <form onSubmit={ this.handleUploadUserPic }>
          <input type="file" name="picture" />
          <input type="submit" value="Upload Picture" />
          </form>
      )
    )
  }
}
const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};
export default connect(mapStateToProps)(
  withAsyncAction("users", "putUserPic")(UploadUserPic)
);