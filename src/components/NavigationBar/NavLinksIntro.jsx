import classes from "./NavLinksIntro.module.css";
import { NavLink } from "react-router-dom";
import keycloak from "../../util/keycloak";
import ButtonUI from "../UI/ButtonUI";

const NavLinksIntro = () => {
  const loginHandler = () => {
    keycloak.login();
  };

  return (
    <div className={classes.auth}>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
      <li>
        <ButtonUI onClick={loginHandler}>Sign in</ButtonUI>
      </li>
    </div>
  );
};
export default NavLinksIntro;
