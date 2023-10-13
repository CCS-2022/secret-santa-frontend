import classes from "./FriendsTab.module.css";
import FriendsList from "../Friends/FriendsList";
import { useLoaderData } from "react-router-dom";

const FriendsTab = () => {
  const data = useLoaderData();

  return (
    <div className={classes["profile-tabs"]}>
      <FriendsList events={data}></FriendsList>
    </div>
  );
};

export default FriendsTab;
