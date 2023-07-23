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
              <NavLink to="groups" className={classes["nav-link"]}>
                My Groups
              </NavLink>
            </li>
            <li>
              <NavLink to="login?mode=login" className={classes["nav-link"]}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="login?mode=signup"
                className={classes["nav-link__button"]}
              >
                Sign up
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
