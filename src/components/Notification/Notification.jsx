import { useDispatch, useSelector } from "react-redux";
import ButtonUI from "../UI/ButtonUI";
import classes from "./Notification.module.css";
import { friendsRequestsActions } from "../../store/friendRequests-slice";

export default function NotificationField(props) {
  const dispatch = useDispatch();
  const friendRequests = useSelector(
    (state) => state.friendRequests.friendRequests
  );

  console.log(friendRequests);
  // Handle Request Response
  function requestResponse(friendshipId, answer) {
    dispatch(
      friendsRequestsActions.friendRequestResponse({ friendshipId, answer })
    );
    props.onClick();
  }
  return (
    <div className={classes["notifications-container"]}>
      <div>
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
      <ButtonUI onClick={props.onClick}>Cancel</ButtonUI>
    </div>
  );
}
