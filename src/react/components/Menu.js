import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Nav } from "shards-react";
import Logo from "./KenzieLogoGreen.png";
import {
  faHome,
  faUserCircle,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { withAsyncAction, connect } from "../HOCs";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./Menu.css";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="header">
        <div id="logo">
          <img src={Logo} alt="Logo" width="50px" height="50px" />
        </div>

        {this.props.isAuthenticated && (
          <>
            <div className="header">
              <Nav navbar>
                <NavLink
                  to={`/messagefeed/${this.props.username}`}
                  activeClassName="chosen"
                >
                  <FontAwesomeIcon
                    className="navIcon"
                    icon={faHome}
                    size="sm"
                  />
                  Home
                </NavLink>

                <NavLink
                  to={`/profile/${this.props.username}`}
                  activeClassName="chosen"
                >
                  <FontAwesomeIcon
                    className="navIcon"
                    icon={faUserCircle}
                    size="sm"
                  />
                  Profile
                </NavLink>

                <NavLink to="/" onClick={this.handleLogout}>
                  {" "}
                  <FontAwesomeIcon
                    className="navIcon"
                    icon={faSignOutAlt}
                    size="sm"
                  />
                  Logout
                </NavLink>
              </Nav>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.login.result && state.auth.login.result.username
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("auth", "logout")(Menu)
);
