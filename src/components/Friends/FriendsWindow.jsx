import classes from "./FriendsWindow.module.css";
import { useSelector } from "react-redux";

const FriendsWindow = () => {
  const fetchedFriends = useSelector((state) => state.friends.friends);
  return (
    <div className={classes["friends-page__container"]}>
      <h1>Friends</h1>
      <div className={classes["friends-page__friends"]}>
        <ul className={classes.friends}>
          {fetchedFriends.map((event) => (
            <li key={event.key} className={classes["friend-container"]}>
              <h6>
                {event.firstName} {event.lastName}
              </h6>
              <button className={classes["toggle-button"]}>
                <span className={classes["toggle-button__bar"]}></span>
                <span className={classes["toggle-button__bar"]}></span>
                <span className={classes["toggle-button__bar"]}></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendsWindow;
