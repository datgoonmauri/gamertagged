import React from "react";
import {  Button,
  ButtonGroup,
  ButtonToolbar, } from "shards-react";
import ThumbUpTwoToneIcon from '@material-ui/icons/ThumbUpTwoTone';
import "./ToggleLikeButton.css"
import { connect } from "../HOCs";
import {toggleLike} from "../../redux/actionCreators/"
import DeleteMessageButton from "./DeleteMessageButton"

class ToggleLikeButton extends React.Component {
  handleToggleLike = event => {
    this.props.toggleLike(this.props.messageId);
  };

  render() {
    const isLiked = this.props.likes.find(
      like => like.username === this.props.loggedInUsername
    );
    return (
      <>
     
        <Button  
        style={{
          border:"100%",
          backgroundColor:"#00356b"
        }}
          onClick={ this.handleToggleLike }
         >
          <ThumbUpTwoToneIcon
            style={ {
              position:"relative",
          color: "whitesmoke",
              display: "flex",
              flexDirection:"row-reverse"
            }}/>
            <aside className="likebutton"> { isLiked ? "Unlike" : "Like" }</aside>
        </Button>  
       
      </>
    )
  };
};
const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};
const mapDispatchToProps = {
  toggleLike
};



export default connect(mapStateToProps, mapDispatchToProps)(ToggleLikeButton);
