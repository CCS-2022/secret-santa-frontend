import { createSlice } from "@reduxjs/toolkit";

const groupsSlice = createSlice({
  name: "groups",
  initialState: { groups: [], addGroup: [], addGroupUpdate: false },
  reducers: {
    getGroups(state, action) {
      state.groups = action.payload.groups;
    },
    createGroup(state, action) {
      const { groupName, creatorId, memberIds } = action.payload;
      console.log(groupName);
      console.log(creatorId);
      console.log(memberIds);
      state.addGroup.push({
        groupName: groupName,
        creatorId: creatorId,
        memberIds: memberIds,
      });
      state.addGroupUpdate = !state.addGroupUpdate;
    },
    clearAddGroup(state) {
      state.addGroup = [];
      state.addGroupUpdate = !state.addGroupUpdate;
    },
  },
});

export const groupsActions = groupsSlice.actions;
export default groupsSlice;
