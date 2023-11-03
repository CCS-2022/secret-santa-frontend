import { getAuthToken } from "../util/auth";
import baseFetchUrl from "../util/requests";
import { friendsActions } from "./friends-slice";

export const fetchFriendsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = getAuthToken();

      const response = await fetch(baseFetchUrl + "secret-santa/user/friends", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
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

// ===================================
export const removeFriend = (item) => {
  return async (dispatch) => {
    const token = getAuthToken();
    // console.log(token);
    const createBody = {
      userId: item.userId,
      firstName: item.firstName,
      lastName: item.lastName,
    };
    console.log("CREATE ITEM body ========");
    console.log(createBody);

    try {
      const response = await fetch(
        baseFetchUrl + "secret-santa/user/remove-friend",
        {
          method: "POST",
          body: JSON.stringify(createBody),
          headers: {
            "Content-Type": "application/JSON",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!response.ok) {
        console.error("Request failed with status:", response.status);
        throw new Error("Failed to respond to friend request");
      }

      dispatch(fetchFriendsData());
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error (e.g., show a notification to the user).
      throw error;
    }
  };
};
