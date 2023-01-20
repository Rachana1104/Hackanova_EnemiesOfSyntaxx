import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-text.png";
import profile from "../../images/pfp.png";

const Header = () => {
  return (
    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <img src={logo} alt="logo" />
              </a>
              <ul className="nav">
                <li className="scroll-to-section">
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/build">Build</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/visualize">Visualize</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/explain">Explain</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/discuss">Discuss</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/contests">Contests</Link>
                </li>
                <li>
                  <div className="gradient-button">
                    <a id="modal_trigger" href="#modal">
                      <i className="fa fa-sign-in-alt"></i> Sign In Now
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
