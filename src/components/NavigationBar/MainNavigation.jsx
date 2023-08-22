import classes from "./MainNavigation.module.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import NavLinksIntro from "./NavLinksIntro";
import NavLinksMain from "./NavsLinksMain";
import keycloak from "../../util/keycloak";
// import { useDispatch } from "react-redux";

export default function MainNavigation() {
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

        <button className={classes["toggle-button"]}>
          <span className={classes["toggle-button__bar"]}></span>
          <span className={classes["toggle-button__bar"]}></span>
          <span className={classes["toggle-button__bar"]}></span>
        </button>
      </nav>
    </header>
  );
}
