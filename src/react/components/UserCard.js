import React from "react";
import {
  Card,
  CardTitle,
  CardImg,
  CardBody

  
} from "shards-react";

class UserCard extends React.Component {
  render() {
    return (
      <Card style={{ maxWidth: "300px" }}>
        <CardImg src="https://place-hold.it/300x200" />
        <CardBody>
          <CardTitle>Username</CardTitle>
          <p>displayName</p>
        </CardBody>
      </Card>
    );
  }
}

export default UserCard