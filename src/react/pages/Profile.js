import React from "react";
import { Menu } from "../components";
import "./Profile.css";
import { Nav, NavItem, NavLink } from "shards-react";
import { userIsAuthenticated } from "../HOCs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  Button
} from "shards-react";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        
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
                  Likes
                </NavLink>
              </NavItem>
            </Nav>
          </Card>
        </div>
        <div className="feedContainer">
          <Card className="feedElement">
            <CardImg src="https://place-hold.it/75x75" className="image" />
          </Card>
          <Card className="feedElement">
            <CardImg src="https://place-hold.it/75x75" className="image" />
          </Card>
          <Card className="feedElement">
            <CardImg src="https://place-hold.it/75x75" className="image" />
          </Card>
          <Card className="feedElement">
            <CardImg src="https://place-hold.it/75x75" className="image" />
          </Card>
        </div>

      </>
    );
  }
}

export default userIsAuthenticated(Profile);
