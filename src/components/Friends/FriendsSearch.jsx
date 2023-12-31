import { useEffect, useState } from "react";
import classes from "./FriendsSearch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getAuthToken } from "../../util/auth";
import { friendRequestSend } from "../../store/friendRequest-actions";
import baseFetchUrl from "../../util/requests";

const FriendsSearch = () => {
  // State Hooks
  const [friendName, setFriendName] = useState("");
  const [friendList, setFriendList] = useState([]);

  // Keeping track of friend name being typed inside of input fiel for searching users
  function friendNameHandler(event) {
    setFriendName(event.target.value);
  }

  // Friends Lookup
  useEffect(() => {
    async function friendsLookup() {
      const token = getAuthToken();
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

  // Send friend request
  function sendFriendRequest(userId) {
    friendRequestSend(userId);
    setFriendName("");
  }

  return (
    <div className={classes["friends-list"]}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={classes["magnifying-glass"]}
      />
      <input
        className={classes["form-group__input"]}
        id="title"
        type="text"
        name="title"
        value={friendName}
        onChange={friendNameHandler}
        required
        placeholder="Search Friends..."
      />
      {friendName ? (
        <ul className={classes["friends-list__ul"]}>
          {friendList.map((event, index) => (
            <li className={classes["friends-list__ul-li"]} key={index}>
              <p className={classes["friends-list__ul-name"]}>
                {event.firstName} {event.lastName}
              </p>
              <button
                className={classes["friends-list__ul-button"]}
                onClick={() => sendFriendRequest(event.userId)}
              >
                Send
              </button>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default FriendsSearch;
