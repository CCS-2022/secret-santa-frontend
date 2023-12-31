import BackgroundImgs from "../UI/BackgroundImgs";
import SnowImg from "../UI/SnowImg";
import classes from "./Profile.module.css";
import { NavLink } from "react-router-dom";

const ProfileNav = () => {
  return (
    <>
      <header className={classes.header}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/my-friends"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Friends
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/wishlist"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Wishlist
            </NavLink>
          </li>
        </ul>
      </header>
      <BackgroundImgs />
      {/* <SnowImg /> */}
    </>
  );
};

export default ProfileNav;
