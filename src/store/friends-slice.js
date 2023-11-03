import { createSlice } from "@reduxjs/toolkit";

const friendsSlice = createSlice({
  name: "friends",
  initialState: { friends: [], memberIds: [] },
  reducers: {
    replaceFriends(state, action) {
      state.friends = action.payload.friends;
    },
    setMemberIds(state, action) {
      state.memberIds = action.payload.memberIds;
    },
    deleteFriends(state, action) {},
  },
});

export const friendsActions = friendsSlice.actions;
export default friendsSlice;

// { firstName: "", lastName: "", userId: "", key: 0 }
