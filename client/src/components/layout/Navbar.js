import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper dark">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text "
            >
              <i class="fas fa-bolt" />
              THE WEATHER NETWORK
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
