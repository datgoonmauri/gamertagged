import React from "react";
import { Link } from ".";

// const fakeMessage = {
//   id: 937,
//   text: "Hello World!",
//   username: "testuser",
//   createdAt: "2019-11-18T15:52:56.879Z",
//   likes: []
// };

class MessageCard extends React.Component {
  render() {
    return (
      <div className= "messagecard"
			style={ {
				display: "block",
				fontFamily: "impact",
				fontSize:"1.5em",
		boxShadow:"10px",
          border: "1px double black",
          borderRadius: "12px",
          padding: "2em",
				marginLeft: "2em",
				width: "60%",
        }}
      >
        <Link to={`/profile/${this.props.username}`}>
          <h4>{this.props.username}</h4>
        </Link>
        <p>{this.props.text}</p>
        <p>{new Date(this.props.createdAt).toDateString()}</p>
      </div>
    );
  }
}

export default MessageCard;
