import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Nav } from "shards-react";
import Logo from "./KenzieLogoGreen.png";
import { faHome, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { withAsyncAction } from "../HOCs";
import "./Menu.css";

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
              <NavLink
                to={`/messagefeed/${this.props.username}`}
                activeClassName="chosen"
              >
                <FontAwesomeIcon className="navIcon" icon={faHome} size="m" />
                Home
              </NavLink>

              <NavLink
                to={`/profile/${this.props.username}`}
                activeClassName="chosen"
              >
                <FontAwesomeIcon
                  className="navIcon"
                  icon={faUserCircle}
                  size="m"
                />
                Profile
              </NavLink>

              <NavLink to="/" onClick={this.handleLogout}>
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
