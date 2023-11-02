import classes from "./GroupMembersContainer.module.css";
import { useSelector } from "react-redux";
import ButtonUI from "../../UI/ButtonUI";
import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import { getAuthToken } from "../../../util/auth";

export default function GroupsMembersContainer({ onClick }) {
  // Using State
  const [displayForm, setDisplayFrom] = useState(false);

  const showForm = () => {
    setDisplayFrom(true);
  };

  const hideForm = () => {
    setDisplayFrom(false);
  };

  // Using Store
  const members = useSelector((state) => state.groups.groupMembers);
  const fetchedGroupId = useSelector((state) => state.groups.currentGroupId);

  // current groups
  function handleShuffle() {
    async function shuffle() {
      const token = getAuthToken();
      const response = await fetch(
        "http://192.168.1.235:8080/secret-santa/group/shuffle?groupId=" +
          fetchedGroupId,
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
        // const data = await response.json();

        console.log("SHUFFLE SUCCESS");
      }
    }
    shuffle();
  }

  return (
    <>
      <div className={classes.characteristics}>
        <h2>Group Members</h2>
        <ul className={classes["characteristics-friends"]}>
          {members.map((friend) => (
            <li
              className={classes["characteristics-friends__item"]}
              key={friend.key}
            >
              <p>
                {friend.firstName} {friend.lastName}
              </p>
            </li>
          ))}
        </ul>
        {fetchedGroupId ? (
          <div className={classes["characteristics__buttons"]}>
            <ButtonUI onClick={showForm}>Add friend</ButtonUI>
            <ButtonUI onClick={handleShuffle}>Shuffle</ButtonUI>
          </div>
        ) : null}
      </div>
      {displayForm && <AddFriendForm onClose={hideForm} />}
    </>
  );
}
