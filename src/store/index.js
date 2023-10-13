import { configureStore } from "@reduxjs/toolkit";
import friendsSlice from "./friends-slice";
import groupsSlice from "./groups-slice";
import friendRequestsSlice from "./friendRequests-slice";
import wishlistSlice from "./wishlist-slice";

const store = configureStore({
  reducer: {
    friends: friendsSlice.reducer,
    groups: groupsSlice.reducer,
    friendRequests: friendRequestsSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
});

export default store;
