import { useEffect, useState } from "react";
import Backdrop from "../../UI/Backdrop";
import ButtonUI from "../../UI/ButtonUI";
import classes from "./AddFriendForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import keycloak from "../../../util/keycloak";
import { getAuthToken } from "../../../util/auth";
import { addNewMember, fetchGroupsMembers } from "../../../store/group-actions";
import baseFetchUrl from "../../../util/requests";

const AddFriendForm = (props) => {
  const dispatch = useDispatch();
  const fetchedGroupId = useSelector((state) => state.groups.currentGroupId);
  const [friendName, setFriendName] = useState("");
  const [friendList, setFriendList] = useState([]);
  const [friendId, setFriendId] = useState("");
  function friendNameHandler(event) {
    setFriendName(event.target.value);
  }

  // Friends Lookup
  useEffect(() => {
    async function friendsLookup() {
      const token = getAuthToken();
      // console.log(token);
      const response = await fetch(
        baseFetchUrl + "secret-santa/user/search-users?name=" + friendName,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!response.ok) {
        console.log("Fetching Events Failed.");
      } else {
        const data = await response.json();
        setFriendList(data);
      }
    }
    friendsLookup();
    setFriendList([]);
  }, [friendName]);

  function addFriendHandler(userId, firstName) {
    setFriendId(userId);
    setFriendName(firstName);
  }

  // ======================================= FORM SUBMITTAL ========================================
  function formSubmitHandler(event) {
    event.preventDefault();
    console.log("Form Submitted");
    dispatch(
      addNewMember({
        groupId: fetchedGroupId,
        creatorId: keycloak.subject,
        memberIds: friendId,
      })
    );
    setFriendName("");
    setFriendId("");
    props.onClose();
  }

  return (
    <Backdrop onClose={props.onClose}>
      <div>
        <form onSubmit={formSubmitHandler} className={classes["form-group"]}>
          <h1>Add Friend</h1>
          <label htmlFor="GroupName">Friend Name</label>
          <input
            className={classes["form-group__input"]}
            id="title"
            type="text"
            name="title"
            value={friendName}
            onChange={friendNameHandler}
            required
          />
          <div className={classes.buttons}>
            <ButtonUI type="submit">Add</ButtonUI>
            <ButtonUI type="button" onClick={props.onClose}>
              Cancel
            </ButtonUI>
          </div>
        </form>
        {friendName && !friendId ? (
          <ul className={classes["friends-list__ul"]}>
            {friendList.map((event, index) => (
              <li className={classes["friends-list__ul-li"]} key={index}>
                <p className={classes["friends-list__ul-name"]}>
                  {event.firstName} {event.lastName}
                </p>
                <button
                  className={classes["friends-list__ul-button"]}
                  onClick={() =>
                    addFriendHandler(event.userId, event.firstName)
                  }
                >
                  Add
                </button>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </Backdrop>
  );
};

export default AddFriendForm;
