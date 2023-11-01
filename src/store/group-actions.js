import { getAuthToken } from "../util/auth";
import { groupsActions } from "./groups-slice";

export const fetchGroupsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = getAuthToken();

      const response = await fetch(
        "http://192.168.1.235:8080/secret-santa/user/groups",
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

// ================================================ fetchGroupsMembers ====================================================

export const fetchGroupsMembers = (groupId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = getAuthToken();
      console.log(groupId);
      const response = await fetch(
        "http://192.168.1.235:8080/secret-santa/group?id=" + groupId,
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
      const groupMembers = await fetchData();
      dispatch(
        groupsActions.getMembers({
          groupMembers: groupMembers || [],
        })
      );
      dispatch(groupsActions.selectedGroupId(groupId));
    } catch (error) {
      console.log("Error");
    }
  };
};

// ================================================== createNewGroup =============================================
export const createNewGroup = (newItem) => {
  return async (dispatch) => {
    const token = getAuthToken();

    const createItemBody = newItem.addGroup || [];
    console.log("Create ITEM body ========");
    console.log(createItemBody);

    try {
      const response = await fetch(
        "http://192.168.1.235:8080/secret-santa/group",
        {
          method: "POST",
          body: JSON.stringify(createItemBody[0]),
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

      dispatch(groupsActions.clearAddGroup());
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error (e.g., show a notification to the user).
      throw error;
    }
  };
};

// ================================================== addMemberToGroup =============================================
export const addNewMember = (addFriend) => {
  return async (dispatch) => {
    const token = getAuthToken();
    console.log(addFriend);
    const createBody = {
      groupId: addFriend.groupId,
      creatorId: addFriend.creatorId,
      memberIds: [addFriend.memberIds],
    };
    // groupId: fetchedGroupId,
    // creatorId: keycloak.subject,
    // memberIds: friendId,
    console.log("Create ITEM body ========");
    console.log(createBody);

    try {
      const response = await fetch(
        "http://192.168.1.235:8080/secret-santa/group/add-members?groupId=" +
          addFriend.groupId,
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

      dispatch(fetchGroupsMembers(addFriend.groupId));
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error (e.g., show a notification to the user).
      throw error;
    }
  };
};
