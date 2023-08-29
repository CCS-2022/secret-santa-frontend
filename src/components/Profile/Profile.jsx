import { useState } from "react";
import classes from "./Profile.module.css";
import ProfileTab from "./ProfileTab";
import { Fragment } from "react";
import FriendsTab from "./FriendsTab";
import WishlistTab from "./WishlistTab";
import { useParams } from "react-router";

const Profile = () => {
  const params = useParams();
  const [onProfileTab, setOnProfileTab] = useState(false);
  const [onFriendsTab, setOnFriendsTab] = useState(false);
  const [onWishlistTab, setOnWishlistTab] = useState(false);

  const profileTabHandler = () => {
    setOnProfileTab(true);
    setOnFriendsTab(false);
    setOnWishlistTab(false);
  };
  const friendsTabHandler = () => {
    setOnProfileTab(false);
    setOnFriendsTab(true);
    setOnWishlistTab(false);
  };
  const wishlistTabHandler = () => {
    setOnProfileTab(false);
    setOnFriendsTab(false);
    setOnWishlistTab(true);
  };
  return (
    <Fragment>
      <div className={classes["profile-tabs"]}>
        <button
          onClick={profileTabHandler}
          className={classes["profile-tabs__pg"]}
        >
          Profile
        </button>
        <button
          onClick={friendsTabHandler}
          className={classes["profile-tabs__pg"]}
        >
          My Friends
        </button>
        <button
          onClick={wishlistTabHandler}
          className={classes["profile-tabs__pg"]}
        >
          My Wishlist
        </button>
      </div>
      <div className={classes["profile-tabs__tab"]}>
        {onProfileTab && <ProfileTab></ProfileTab>}
        {onFriendsTab && <FriendsTab></FriendsTab>}
        {onWishlistTab && <WishlistTab></WishlistTab>}
      </div>
      <h1>{params.profileId}</h1>
    </Fragment>
  );
};

export default Profile;
