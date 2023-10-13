import { createSlice } from "@reduxjs/toolkit";

const groupsSlice = createSlice({
  name: "groups",
  initialState: { groups: [] },
  reducers: {
    getGroups(state, action) {
      state.groups = action.payload.groups;
    },
  },
});

export const groupsActions = groupsSlice.actions;
export default groupsSlice;
