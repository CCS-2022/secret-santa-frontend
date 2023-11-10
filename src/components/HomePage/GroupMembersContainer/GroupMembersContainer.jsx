import classes from "./GroupMembersContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import ButtonUI from "../../UI/ButtonUI";
import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import { getAuthToken } from "../../../util/auth";
import baseFetchUrl from "../../../util/requests";
import { wishlistActions } from "../../../store/wishlist-slice";
import FriendsWishlistItems from "./FriendsWishlistItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGifts } from "@fortawesome/free-solid-svg-icons";
export default function GroupsMembersContainer({ onClick }) {
  const dispatch = useDispatch();
  // Using State
  const [displayForm, setDisplayFrom] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const showForm = () => {
    setDisplayFrom(true);
  };

  const hideForm = () => {
    setDisplayFrom(false);
  };

  function showFriendWishlist(userId) {
    setShowWishlist(true);
    dispatch(wishlistActions.updateUserId({ userId }));
    console.log(userId);
  }

  function hideFriendWishlist() {
    setShowWishlist(false);
    dispatch(wishlistActions.updateUserId({}));
  }

  // Using Store
  const members = useSelector((state) => state.groups.groupMembers);
  const fetchedGroupId = useSelector((state) => state.groups.currentGroupId);

  // current groups
  function handleShuffle() {
    async function shuffle() {
      const token = getAuthToken();
      const response = await fetch(
        baseFetchUrl + "secret-santa/group/shuffle?groupId=" + fetchedGroupId,
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
      }
    }
    shuffle();
  }

  return (
    <>
      <div className={classes.characteristics}>
        <h2>Group Members</h2>
        <ul className={classes["characteristics-friends"]}>
          {members.map((friend, index) => (
            <li
              onClick={() => showFriendWishlist(friend.userId)}
              className={classes["characteristics-friends__item"]}
              key={index}
            >
              <p>
                {friend.firstName} {friend.lastName}
              </p>
              <FontAwesomeIcon
                style={{ margin: "0rem 0.5rem" }}
                icon={faGifts}
              />
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
      {showWishlist && <FriendsWishlistItems onClose={hideFriendWishlist} />}
    </>
  );
}
