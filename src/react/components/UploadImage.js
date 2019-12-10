import React from "react";
// import { Spinner } from ".";
import { connect, withAsyncAction } from "../HOCs";
import { Form, FormInput, Button } from "shards-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class UploadImage extends React.Component {
  handleUpload = event => {
    event.preventDefault();
    console.log("uploaded!");
    const formData = new FormData(event.target);
    this.props.putUserImage(formData);
  };
  render() {
    return (
      <React.Fragment>
        {this.props.username === this.props.loggedInUsername && (
          <Form
            onSubmit={this.handleUpload}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormInput
              style={{ borderRadius: "0" }}
              squared
              size="sm"
              type="file"
              name="picture"
            />
            <Button
              squared
              theme="primary"
              size="sm"
              type="submit"
              value="Upload Picture"
            >
              <FontAwesomeIcon icon={faCamera} size="lg"></FontAwesomeIcon>{" "}
              Upload
            </Button>
          </Form>
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
  withAsyncAction("users", "putUserImage")(UploadImage)
);
