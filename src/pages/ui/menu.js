import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";

export const Menu = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <figure className="navbar-item">
            <img src={logo} alt="pokemon logo" />
          </figure>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/" className="navbar-item">My Pokedex</Link>
            <Link to="/" className="navbar-item">Pokemon</Link>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-link">
                  <strong>Sign out</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
