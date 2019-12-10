import React from "react";
import { withAsyncAction, connect } from "../HOCs";
import "./DeleteMessage.css";
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';
import { InputGroup, FormInput, FormGroup, Form} from "shards-react"
import { Button } from "@material-ui/core";


class DeleteMessageButton extends React.Component {

  handleDeleteMesssage = event => {
      const confirmed = window.confirm(
        "Are you sure you want to delete this message?"
      );
      if (confirmed) {
        this.props.deleteMessage(this.props.messageId);
      }
    };
  render() {
    return (
      this.props.username === this.props.loggedInUsername && (
      
        <DeleteTwoToneIcon id="deletethis" onClick={ this.handleDeleteMesssage }
        
            style={ {
              border:"100%",
          backgroundColor:"#00356b",
              position:"relative",
          color: "whitesmoke",
              display: "flex",
             
            }}
          />
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};

export default connect(mapStateToProps)(withAsyncAction("messages", "deleteMessage")(DeleteMessageButton)
);
