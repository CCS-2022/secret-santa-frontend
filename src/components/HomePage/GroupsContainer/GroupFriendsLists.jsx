import classes from "./GroupFriendLists.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { friendsActions } from "../../../store/friends-slice";

const GroupFriendLists = (props) => {
  const dispatch = useDispatch();
  const storeFriends = useSelector((state) => state.friends.friends);
  const [friends, setFriends] = useState([]);
  const [membersIds, setMembersIds] = useState([]);
  const [friendList, setFriendList] = useState(storeFriends);

  useEffect(() => {
    dispatch(
      friendsActions.setMemberIds({
        memberIds: membersIds || [],
      })
    );
  }, [membersIds, dispatch]);

  function addFriends(friend) {
    setFriends((prevFriends) => {
      return [...prevFriends, friend];
    });

    setMembersIds((prevIds) => {
      const updatedIds = [...prevIds, friend.userId];
      return updatedIds;
    });

    setFriendList((prevFriendList) => {
      return prevFriendList.filter((item) => item.userId !== friend.userId);
    });
  }

  function deleteFriends(friend) {
    setFriends((prevFriendList) => {
      return prevFriendList.filter((item) => item.userId !== friend.userId);
    });

    setMembersIds((prevIds) => {
      const updatedIds = prevIds.filter((id) => id !== friend.userId);
      return updatedIds;
    });

    setFriendList((prevFriends) => {
      return [...prevFriends, friend];
    });
  }

  return (
    <>
      <label htmlFor="friends">Add friends to the group</label>
      <div className={classes["form-group__input"]}>
        {friends.map((friend, index) => (
          <div className={classes["form-group__input-p"]} key={index}>
            <p>{friend.firstName}</p>
            <button
              onClick={() => deleteFriends(friend)}
              className={classes["toggle-button"]}
            >
              <FontAwesomeIcon icon={faTrashCan} style={{ color: "#932f39" }} />
            </button>
          </div>
        ))}
      </div>
      <ul className={classes.friends}>
        {friendList.map((data, index) => (
          <li
            className={classes["friends-li"]}
            onClick={() => addFriends(data)}
            key={index}
          >
            {data.firstName} {data.lastName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GroupFriendLists;
