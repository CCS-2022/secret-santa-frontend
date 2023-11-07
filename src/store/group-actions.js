import { getAuthToken } from "../util/auth";
import baseFetchUrl from "../util/requests";
import { groupsActions } from "./groups-slice";

export const fetchGroupsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = getAuthToken();

      const response = await fetch(baseFetchUrl + "secret-santa/user/groups", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (!response.ok) {
        throw new Error("Sending Cart Data Failed!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const groupsData = await fetchData();
      dispatch(
        groupsActions.getGroups({
          groups: groupsData || [],
        })
      );
    } catch (error) {
      // console.log("Error");
    }
  };
};

// ================================================ fetchGroupsMembers ====================================================

export const fetchGroupsMembers = (groupId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = getAuthToken();
      const response = await fetch(
        baseFetchUrl + "secret-santa/group?id=" + groupId,
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
      const groupMembers = await fetchData();
      dispatch(
        groupsActions.getMembers({
          groupMembers: groupMembers || [],
        })
      );
      dispatch(groupsActions.selectedGroupId(groupId));
    } catch (error) {
      // console.log("Error");
    }
  };
};

// ================================================== createNewGroup =============================================
export const createNewGroup = (newItem) => {
  return async (dispatch) => {
    const token = getAuthToken();
    const createItemBody = newItem.addGroup || [];

    try {
      const response = await fetch(baseFetchUrl + "secret-santa/group", {
        method: "POST",
        body: JSON.stringify(createItemBody[0]),
        headers: {
          "Content-Type": "application/JSON",
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to respond to friend request");
      }

      dispatch(groupsActions.clearAddGroup());
    } catch (error) {
      throw error;
    }
  };
};

// ================================================== addMemberToGroup =============================================
export const addNewMember = (addFriend) => {
  return async (dispatch) => {
    const token = getAuthToken();

    const createBody = {
      groupId: addFriend.groupId,
      creatorId: addFriend.creatorId,
      memberIds: [addFriend.memberIds],
    };

    try {
      const response = await fetch(
        baseFetchUrl +
          "secret-santa/group/add-members?groupId=" +
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
        throw new Error("Failed to respond to friend request");
      }
      dispatch(fetchGroupsMembers(addFriend.groupId));
    } catch (error) {
      throw error;
    }
  };
};
