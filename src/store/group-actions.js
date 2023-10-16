import { getAuthToken } from "../util/auth";
import { groupsActions } from "./groups-slice";

export const fetchGroupsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = getAuthToken();

      const response = await fetch(
        "http://localhost:8080/secret-santa/user/groups",
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
      return data;
    };
    try {
      console.log("Success");
      const groupsData = await fetchData();
      dispatch(
        groupsActions.getGroups({
          groups: groupsData || [],
        })
      );
    } catch (error) {
      console.log("Error");
    }
  };
};

// ===================================
export const createNewGroup = (newItem) => {
  return async (dispatch) => {
    const token = getAuthToken();

    const createItemBody = newItem.addGroup || [];
    console.log("Create ITEM body ========");
    console.log(createItemBody);

    try {
      const response = await fetch("http://localhost:8080/secret-santa/group", {
        method: "POST",
        body: JSON.stringify(createItemBody[0]),
        headers: {
          "Content-Type": "application/JSON",
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        console.error("Request failed with status:", response.status);
        throw new Error("Failed to respond to friend request");
      }

      dispatch(groupsActions.clearAddGroup());
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error (e.g., show a notification to the user).
      throw error;
    }
  };
};
