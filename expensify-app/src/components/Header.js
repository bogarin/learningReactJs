import { NavLink } from "react-router-dom";
import React from "react";
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <Links />
  </header>
);

const Links = () => (
  <div>
    <NavLink to="/" exact={true} activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      create
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      help
    </NavLink>
  </div>
);

export default Header;
