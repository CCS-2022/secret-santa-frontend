import { createSlice } from "@reduxjs/toolkit";

const friendsSlice = createSlice({
  name: "friends",
  initialState: { friends: [] },
  reducers: {
    replaceFriends(state, action) {
      state.friends = action.payload.friends;
    },
    addFriends(state, action) {},
    deleteFriends(state, action) {},
  },
});

export const friendsActions = friendsSlice.actions;
export default friendsSlice;

// { firstName: "", lastName: "", userId: "", key: 0 }
