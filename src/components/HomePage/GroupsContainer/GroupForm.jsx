import classes from "./GroupForm.module.css";
import ButtonUI from "../../UI/ButtonUI";
import { useState } from "react";
import keycloak from "../../../util/keycloak";
import Backdrop from "../../UI/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { groupsActions } from "../../../store/groups-slice";
import GroupFriendLists from "./GroupFriendsLists";
import { friendsActions } from "../../../store/friends-slice";

const GroupForm = (props) => {
  const dispatch = useDispatch();
  const storeMemberIds = useSelector((state) => state.friends.memberIds);
  const [groupName, setGroupName] = useState("");

  function groupNameHandler(event) {
    setGroupName(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    dispatch(
      groupsActions.createGroup({
        groupName: groupName,
        creatorId: keycloak.subject,
        memberIds: storeMemberIds,
      })
    );
    setGroupName("");

    dispatch(
      friendsActions.setMemberIds({
        membersIds: [],
      })
    );
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
        <GroupFriendLists />
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
