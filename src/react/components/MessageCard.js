import React from "react";
import { Link } from ".";
import { Card, CardBody, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

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
      <Card style={{ maxWidth: "30em", margin: "auto" }}>
        <CardBody>
          <Link to={`/profile/${this.props.username}`}>
            <CardSubtitle>{this.props.username}</CardSubtitle>
          </Link>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            {this.props.text}
          </p>
          <p style={{ fontSize: "14px" }}>
            {new Date(this.props.createdAt).toDateString()}
          </p>
        </CardBody>
      </Card>
    );
  }
}

export default MessageCard;
