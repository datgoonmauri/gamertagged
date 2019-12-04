import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { withAsyncAction } from "../HOCs";
import { Spinner } from ".";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter
} from "shards-react";

class UserCard extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.username);
  }
  render() {
    if (this.props.result === null) {
      return <Spinner />;
    }

    const user = this.props.result.user;

    return (
      <div id="container">
        <div className="container">
          <Card style={{ maxWidth: "300px" }}>
            <CardHeader className="header"></CardHeader>
            <CardImg
              top
              src={
                user.pictureLocation
                  ? user.pictureLocation
                  : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              }
              className="cardImg"
            />
            <CardBody>
              <CardTitle className="title">{user.displayName}</CardTitle>
              <div className="bio">
                {user.about ? user.about : "You don't have a bio yet"}
              </div>
            </CardBody>
            <CardFooter>
              <p>Created: {new Date(user.createdAt).toDateString()}</p>
              <p>Last Updated: {new Date(user.updatedAt).toDateString()}</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }
}

export default withAsyncAction("users", "getUser")(UserCard);
