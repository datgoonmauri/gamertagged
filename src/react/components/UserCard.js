import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { withAsyncAction } from "../HOCs";
import { Spinner } from ".";
import { Link } from ".";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter
} from "shards-react";
import DeleteUserButton from "../components/DeleteUserButton";
import UploadImage from "../components/UploadImage";

class UserCard extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.username);
  }

  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      this.props.getUser(this.props.username);
    }
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
                  ? "https://kwitter-api.herokuapp.com" + user.pictureLocation
                  : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              }
              className="cardImg"
            />
            <CardBody>
              <Link to={`/profile/${this.props.username}`}>
                <CardTitle className="title">{user.displayName}</CardTitle>
              </Link>
              <div className="bio">
                {user.about ? user.about : "You don't have a bio yet"}
              </div>
            </CardBody>
            <CardFooter>
              <p>Created: {new Date(user.createdAt).toDateString()}</p>
              <p>Last Updated: {new Date(user.updatedAt).toDateString()}</p>
              <UploadImage username={this.props.username} />
              <DeleteUserButton username={this.props.username} />
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }
}

export default withAsyncAction("users", "getUser")(UserCard);
