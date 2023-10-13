import classes from "./FriendsRequests.module.css";
import { useDispatch, useSelector } from "react-redux";
import { friendsRequestsActions } from "../../store/friendRequests-slice";

const FriendsRequests = () => {
  const dispatch = useDispatch();
  const friendRequests = useSelector(
    (state) => state.friendRequests.friendRequests
  );
  // Handle Request Response
  function requestResponse(friendshipId, answer) {
    dispatch(
      friendsRequestsActions.friendRequestResponse({ friendshipId, answer })
    );
  }

  return (
    <div className={classes["friends-page__container"]}>
      <h1>Friend Requests</h1>
      <div className={classes["friends-page__requests"]}>
        <ul className={classes.friends}>
          {friendRequests.map((event) => (
            <li
              key={event.friendshipId}
              className={classes["friend-container"]}
            >
              <h6>
                {event.requesterFirstName} {event.requesterLastName}
              </h6>
              <button
                onClick={() => requestResponse(event.friendshipId, true)}
                type="button"
                className={classes["friend-container__button"]}
              >
                Yes
              </button>
              <button
                onClick={() => requestResponse(event.friendshipId, false)}
                type="button"
                className={classes["friend-container__button"]}
              >
                No
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendsRequests;
