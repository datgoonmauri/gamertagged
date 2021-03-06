import React from "react";
import { Link } from ".";
import { Card, CardBody, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import DeleteMessage from "../components/DeleteMessage";
import { connect } from "../HOCs";
import ToggleLike from "../components/ToggleLike";

class MessageCard extends React.Component {
  render() {
    return (
      <Card style={{ width: "30em", margin: "auto" }}>
        <CardBody>
          <Link to={`/profile/${this.props.username}`}>
            <CardSubtitle>{this.props.username}</CardSubtitle>
          </Link>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            {this.props.text}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <p style={{ fontSize: "14px" }}>
              {new Date(this.props.createdAt).toDateString()}
            </p>
            <p> Likes: {this.props.likes.length}</p>
            <ToggleLike messageId={this.props.id} likes={this.props.likes} />
            {this.props.username === this.props.loggedInUsername && (
              <DeleteMessage
                messageId={this.props.id}
                username={this.props.username}
              />
            )}
          </div>
        </CardBody>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};
export default connect(mapStateToProps)(MessageCard);
