import React from "react";
import { Link } from ".";
import { Card, CardBody, CardTitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./MessageCard.css";

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
      <div class="container">
        <Card style={{ maxWidth: "400px", margin: "auto" }}>
          <CardBody>
            <Link to={`/profile/${this.props.username}`}>
              <CardTitle>{this.props.username}</CardTitle>
            </Link>
            <p>{this.props.text}</p>
            <p>{new Date(this.props.createdAt).toDateString()}</p>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MessageCard;
