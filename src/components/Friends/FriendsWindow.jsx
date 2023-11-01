import classes from "./FriendsWindow.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { removeFriend } from "../../store/friend-actions";
const FriendsWindow = () => {
  const dispatch = useDispatch();
  const fetchedFriends = useSelector((state) => state.friends.friends);
  function handleDeleteFriend(userId, firstName, lastName) {
    dispatch(
      removeFriend({
        userId,
        firstName,
        lastName,
      })
    );
  }
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
              <button
                onClick={() =>
                  handleDeleteFriend(
                    event.userId,
                    event.firstName,
                    event.lastName
                  )
                }
                className={classes["toggle-button"]}
              >
                <FontAwesomeIcon
                  icon={faTrashCan}
                  style={{ color: "#932f39" }}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendsWindow;
