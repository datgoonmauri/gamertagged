import React from "react";
import { Menu } from "../components";
// import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { userIsAuthenticated } from "../HOCs";
<<<<<<< HEAD
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  Button
} from "shards-react";
import ButtonExampleToggle from "../components/LikeButton";

=======
import { Card, CardHeader, CardTitle, CardImg, CardBody } from "shards-react";
>>>>>>> 55cb1ce1b3ddaf4ec443699fa1746da7cf96093b

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
<<<<<<< HEAD
        
        <div className="container">
          <Card className="header">
            <CardHeader className="header"></CardHeader>
            <CardImg src="https://place-hold.it/100x100" className="cardImg" />
            <CardBody>
              <CardTitle className="title">Darveloper</CardTitle>
              <div className="bio">
                mother of plants and animals. full-SNACK developer.
              </div>
              <Button className="follows"> 286 Followers </Button>
              <Button className="follows"> 124 Following </Button>
            </CardBody>
            <Nav fill className="nav">
              <NavItem>
                <NavLink className="nav-item" href="#">
                  Tweets
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" href="#">
                  Replies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" href="#">
                  Media
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" href="#">
                  <Button className="ui toggle button" aria-pressed="true">Like</Button>
                </NavLink>

              </NavItem>
            </Nav>
          </Card>
=======
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
>>>>>>> 55cb1ce1b3ddaf4ec443699fa1746da7cf96093b
        </div>
        <div className="feedContainer">
          <Card className="feedElement">
            <CardImg src="" className="image" />
          </Card>
          <Card className="feedElement">
            <CardImg src="" className="image" />
          </Card>
          <Card className="feedElement">
            <CardImg src="" className="image" />
          </Card>
          <Card className="feedElement">
            <CardImg src="" className="image" />
          </Card>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
