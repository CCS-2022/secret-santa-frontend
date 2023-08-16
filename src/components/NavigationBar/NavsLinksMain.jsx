import classes from "./MainNavigation.module.css";
import keycloak from "../../util/keycloak";
import { Link } from "react-router-dom";

const PROFILE_ID = [
  { id: "p1", title: "Profile 1" },
  { id: "p2", title: "Profile 2" },
  { id: "p3", title: "Profile 3" },
];

const NavLinksMain = () => {
  const logoutHandler = () => {
    keycloak.logout({ redirectUri: "http://localhost:5173/" });
  };

  return (
    <div className={classes.auth}>
      <ul className={classes["nav-links"]}>
        <li>
          <Link to={`/${PROFILE_ID}`}>Profile</Link>
        </li>
        <li onClick={logoutHandler}>Logout</li>
      </ul>
    </div>
  );
};
export default NavLinksMain;
