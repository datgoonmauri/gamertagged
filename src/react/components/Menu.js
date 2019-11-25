import React from "react";
import { Link, NavLink } from ".";
import { Nav, NavItem } from "shards-react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faBell,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import Logo from "src/react/components/KenzieLogoGreen.png";
import { withAsyncAction } from "../HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <Nav>
        <div id="logo">
          <img src={Logo} alt="Logo" width="50px" height="50px" />
        </div>
        <div id="menu">
          {this.props.isAuthenticated && (
            <div id="menu-links">
              <NavItem tabs>
                <NavLink to="./MessageFeed.js" activeClassName="chosen">
                  <FontAwesomeIcon className="navIcon" icon={faHome} size="m" />
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="./Notifications.js" activeClassName="chosen">
                  <FontAwesomeIcon className="navIcon" icon={faBell} size="m" />
                  Notifications
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="./Messages.js" activeClassName="chosen">
                  <FontAwesomeIcon
                    className="navIcon"
                    icon={faEnvelope}
                    size="m"
                  />
                  Messages
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="./Profile.js" activeClassName="chosen">
                  <FontAwesomeIcon
                    className="navIcon"
                    icon={faUserCircle}
                    size="m"
                  />
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <Link href="/" onClick={this.handleLogout}>
                  Logout
                </Link>
              </NavItem>
            </div>
          )}
        </div>
      </Nav>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
