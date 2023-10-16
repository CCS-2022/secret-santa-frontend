import { Fragment } from "react";
import classes from "./FriendsList.module.css";
import FriendsWindow from "./FriendsWindow";
import FriendsRequests from "./FriendsRequests";
import FriendsSearch from "./FriendsSearch";

const FriendsList = () => {
  // ===============================================================================================================

  return (
    <div className={classes["friends-tab__container"]}>
      <div className={classes["friends-container"]}>
        <FriendsSearch />
      </div>
      <div className={classes["friends-page__container"]}>
        <FriendsWindow />
        <FriendsRequests />
      </div>
    </div>
  );
};

export default FriendsList;
