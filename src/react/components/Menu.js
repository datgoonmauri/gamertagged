import React from "react";
import { Nav, NavLink } from "shards-react";
import "./Menu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Logo from "./KenzieLogoGreen.png";
import { withAsyncAction } from "../HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div>
        <div id="logo">
          <img src={Logo} alt="Logo" width="50px" height="50px" />
        </div>

        {this.props.isAuthenticated && (
          <>
            <Nav navbar>
              <NavLink href="/MessageFeed" activeClassName="chosen">
                <FontAwesomeIcon className="navIcon" icon={faHome} size="m" />
                Home
              </NavLink>

              <NavLink active href="/Profile" activeClassName="chosen">
                <FontAwesomeIcon
                  className="navIcon"
                  icon={faUserCircle}
                  size="m"
                />
                Profile
              </NavLink>

              <NavLink href="/" onClick={this.handleLogout}>
                Logout
              </NavLink>
            </Nav>
          </>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
