import { getAuthToken } from "../util/auth";
import { friendsActions } from "./friends-slice";

export const fetchFriendsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = getAuthToken();

      const response = await fetch(
        "http://localhost:8080/secret-santa/user/friends",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Sending Cart Data Failed!");
      }
      const data = await response.json();
      for (let i = 0; i < data.length; i++) {
        data[i].key = i;
      }
      return data;
    };
    try {
      console.log("Success");
      const friendsData = await fetchData();
      dispatch(
        friendsActions.replaceFriends({
          friends: friendsData || [],
        })
      );
    } catch (error) {
      console.log("Error");
    }
  };
};
