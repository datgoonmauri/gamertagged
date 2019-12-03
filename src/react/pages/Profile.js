import React from "react";
import { Menu, MessageList, MessageCard } from "../components";
// import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { userIsAuthenticated } from "../HOCs";
import { Card, CardHeader, CardTitle, CardImg, CardBody } from "shards-react";
import ButtonExampleToggle from "../components/LikeButton";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div id="container">
          <div className="container">
            <Card style={{ maxWidth: "300px", margin: "auto" }}>
              <CardHeader className="header"></CardHeader>
              <CardImg src="" className="cardImg" />
              <CardBody>
                <CardTitle className="title">Darveloper</CardTitle>
                <div className="bio">
                  mother of plants and animals. full-SNACK developer.
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <MessageCard />
        <MessageList />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
