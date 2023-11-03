import classes from "./NavLinksMain.module.css";
import keycloak from "../../util/keycloak";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NotificationField from "../Notification/Notification";
import { useSelector } from "react-redux";

const NavLinksMain = () => {
  const friendRequests = useSelector(
    (state) => state.friendRequests.friendRequests
  );
  console.log(friendRequests.length);
  const [displayForm, setDisplayFrom] = useState(false);

  const showForm = () => {
    setDisplayFrom(true);
  };

  const hideForm = () => {
    setDisplayFrom(false);
  };

  const logoutHandler = () => {
    keycloak.logout({ redirectUri: "http://localhost:5173/" });
  };

  return (
    <div className={classes.auth}>
      <ul className={classes["nav-links"]}>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <Link to="/profile">Account</Link>
        </li>
        <li onClick={logoutHandler}>Logout</li>
        <li className={classes["auth-li"]}>
          <FontAwesomeIcon
            onClick={showForm}
            icon={faBell}
            className={classes["bell-icon"]}
          />
          {displayForm && <NotificationField onClick={hideForm} />}
          {friendRequests.length !== 0 && (
            <span className={classes["notification-span"]}></span>
          )}
        </li>
      </ul>
    </div>
  );
};
export default NavLinksMain;
