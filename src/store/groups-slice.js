import { createSlice } from "@reduxjs/toolkit";

const groupsSlice = createSlice({
  name: "groups",
  initialState: {
    groups: [],
    addGroup: [],
    groupMembers: [],
    addGroupUpdate: false,
    currentGroupId: null,
  },
  reducers: {
    getGroups(state, action) {
      state.groups = action.payload.groups;
    },
    createGroup(state, action) {
      const { groupName, creatorId, memberIds } = action.payload;
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
    getMembers(state, action) {
      state.groupMembers = action.payload.groupMembers;
    },
    selectedGroupId(state, action) {
      state.currentGroupId = action.payload;
    },
  },
});

export const groupsActions = groupsSlice.actions;
export default groupsSlice;
