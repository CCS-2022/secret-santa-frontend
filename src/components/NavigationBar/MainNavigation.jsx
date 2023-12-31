import classes from "./MainNavigation.module.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import NavLinksIntro from "./NavLinksIntro";
import NavLinksMain from "./NavsLinksMain";
import keycloak from "../../util/keycloak";
import { useState } from "react";

export default function MainNavigation() {
  const [showNav, setShowNav] = useState(false);
  function handleSideButton() {
    setShowNav((prev) => !prev);
  }
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <img className={classes.logo} src={logo} alt="logo" />
            </NavLink>
          </li>
          {!keycloak.authenticated && <NavLinksIntro></NavLinksIntro>}
          {keycloak.authenticated && <NavLinksMain></NavLinksMain>}
        </ul>
      </nav>
    </header>
  );
}
