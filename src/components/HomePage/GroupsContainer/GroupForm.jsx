import classes from "./GroupForm.module.css";
import ButtonUI from "../../UI/ButtonUI";
import { useState } from "react";
import keycloak from "../../../util/keycloak";
import Backdrop from "../../UI/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { groupsActions } from "../../../store/groups-slice";

const GroupForm = (props) => {
  const friendsTwo = useSelector((state) => state.friends.friends);
  // useState Hooks to obtain data to send a POST request
  const [friends, setFriends] = useState([]);
  const [membersIds, setMembersIds] = useState([]);
  const [groupName, setGroupName] = useState("");
  const dispatch = useDispatch();
  // Adding friends to add to group

  function addFriends(friend) {
    setFriends((prevFriends) => {
      return [...prevFriends, friend.firstName];
    });

    setMembersIds((prevIds) => {
      const updatedIds = [...prevIds, friend.userId];
      return updatedIds;
    });
  }

  function groupNameHandler(event) {
    setGroupName(event.target.value);
  }

  // ======================================= FORM SUBMITTAL ========================================
  function formSubmitHandler(event) {
    event.preventDefault();

    dispatch(
      groupsActions.createGroup({
        groupName: groupName,
        creatorId: keycloak.subject,
        memberIds: membersIds,
      })
    );
    setGroupName("");
    setMembersIds([]);

    props.onClose();
  }

  return (
    <Backdrop onClose={props.onClose}>
      <form onSubmit={formSubmitHandler} className={classes["form-group"]}>
        <h1>Add Group</h1>
        <label htmlFor="GroupName">Group Name</label>
        <input
          className={classes["form-group__input"]}
          id="title"
          type="text"
          name="title"
          value={groupName}
          onChange={groupNameHandler}
          required
        />
        <label htmlFor="friends">Add friends to group</label>
        <div className={classes["form-group__input"]}>
          <p>{friends}</p>
        </div>
        <ul className={classes.friends}>
          {friendsTwo.map((data) => (
            <li onClick={() => addFriends(data)} key={data.key}>
              {data.firstName} {data.lastName}
            </li>
          ))}
        </ul>
        <div className={classes.buttons}>
          <ButtonUI type="submit">Add</ButtonUI>
          <ButtonUI type="button" onClick={props.onClose}>
            Cancel
          </ButtonUI>
        </div>
      </form>
    </Backdrop>
  );
};

export default GroupForm;
