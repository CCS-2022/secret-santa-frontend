import classes from "./MainNavigation.module.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

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
          <div className={classes.auth}>
            <li>
              <NavLink to="about" className={classes["nav-link"]}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="login" className={classes["nav-link__button"]}>
                Sign in
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
