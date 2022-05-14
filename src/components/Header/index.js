import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <header className="header">
        <div>
          &nbsp;
          <Link to="https://www.linkedin.com/in/albialikaj/" target="_blank">
            <i className="fa fa-linkedin-square"></i>{" "}
          </Link>
          <a href="https://github.com/albialikaj">
            <i className="fa fa-github-square"></i>{" "}
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
