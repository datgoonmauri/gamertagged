import React from "react";
// import { Spinner } from ".";
import { connect, withAsyncAction } from "../HOCs";
import {
  Form,
  FormInput
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class UploadImage extends React.Component {
    handleUpload = event => {
        event.preventDefault();
        console.log("uploaded!");
        const formData = new FormData(event.target)
        this.props.putUserImage(formData)
    }
  render() {
    return (
      <React.Fragment>
        {this.props.username === this.props.loggedInUsername && (
            <Form onSubmit={this.handleUpload}>
                <FormInput type="file" name="picture"/>
                <FormInput type="submit" value="Upload Picture"/>
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
export default connect(mapStateToProps)(withAsyncAction("users", "putUserImage")(UploadImage));
