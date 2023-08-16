import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
import keycloak from "../../util/keycloak";

const NavLinksIntro = () => {
  const loginHandler = () => {
    keycloak.login();
  };

  return (
    <div className={classes.auth}>
      <li>
        <NavLink to="about" className={classes["nav-link"]}>
          About
        </NavLink>
      </li>
      <li>
        <button onClick={loginHandler} className={classes["nav-link__button"]}>
          Sign in
        </button>
      </li>
    </div>
  );
};
export default NavLinksIntro;
