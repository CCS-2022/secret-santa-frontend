import styles from "./MainHome.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ButtonUI from "../UI/ButtonUI";
import { getAuthToken } from "../../util/auth";
import GroupForm from "./GroupForm";
import { useSelector } from "react-redux";

const MainHome = () => {
  // current groups
  const fetchedGroups = useSelector((state) => state.groups.groups);

  // state for controlling specific group's members
  const [members, setMembers] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState();
  const [displayForm, setDisplayFrom] = useState(false);

  const showForm = () => {
    setDisplayFrom(true);
  };

  const hideForm = () => {
    setDisplayFrom(false);
  };

  // console.log(fetchedEvents.groupId);

  async function getMembers(groupId) {
    const token = getAuthToken();
    console.log(groupId);
    const response = await fetch(
      "http://localhost:8080/secret-santa/group?id=" + groupId,
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
      // Process and modify data as needed.
      for (let i = 0; i < data.length; i++) {
        data[i].key = i;
      }

      setMembers(data);
      setSelectedGroupId(groupId);
    }
  }

  function handleShuffle() {
    async function shuffle() {
      const token = getAuthToken();
      const response = await fetch(
        "http://localhost:8080/secret-santa/group/shuffle?groupId=" +
          selectedGroupId,
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

  console.log(selectedGroupId);

  return (
    <div className={styles.layout}>
      <div className={styles.groups}>
        <ul className={styles["groups-cluster"]}>
          {fetchedGroups.map((group) => (
            <li
              onClick={() => getMembers(group.groupId)}
              className={styles["group-id"]}
              key={group.groupId}
            >
              <p>{group.groupName}</p>
            </li>
          ))}
        </ul>
        <div>
          <ButtonUI onClick={showForm}>
            <FontAwesomeIcon className={styles["plus-icon"]} icon={faPlus} />
          </ButtonUI>
        </div>
      </div>
      <div className={styles.characteristics}>
        <h2>Group Members</h2>

        <ul className={styles["characteristics-friends"]}>
          {members.map((friend) => (
            <li
              className={styles["characteristics-friends__item"]}
              key={friend.key}
            >
              <p>
                {friend.firstName} {friend.lastName}
              </p>
            </li>
          ))}
        </ul>
        <div className={styles["characteristics__buttons"]}>
          <ButtonUI>Add friend</ButtonUI>
          <ButtonUI onClick={handleShuffle}>Shuffle</ButtonUI>
        </div>
      </div>

      {displayForm && <GroupForm onClose={hideForm}></GroupForm>}
    </div>
  );
};

export default MainHome;
