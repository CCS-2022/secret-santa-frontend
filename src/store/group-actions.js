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

// creatorId: "b00e2f84-3473-4911-8f92-afc019b5c68f"
// dateCreated: "2023-09-24"
// groupId: 5
// groupName: "Rocket League Gods"
// memberIds: null
