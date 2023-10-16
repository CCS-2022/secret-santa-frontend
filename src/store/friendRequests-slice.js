import { createSlice } from "@reduxjs/toolkit";

const friendRequestsSlice = createSlice({
  name: "friendRequests",
  initialState: { friendRequests: [], response: [] },
  reducers: {
    seeFriendRequests(state, action) {
      state.friendRequests = action.payload.friendRequests;
    },
    sendFriendRequest(state, action) {},
    friendRequestResponse(state, action) {
      const { friendshipId, answer } = action.payload;
      const existingRequest = state.friendRequests.find(
        (request) => request.friendshipId === friendshipId
      );
      if (existingRequest) {
        state.response.push({
          friendshipId: existingRequest.friendshipId,
          requester: existingRequest.requester,
          recipient: existingRequest.recipient,
          status: answer,
          dateRequested: existingRequest.dateRequested,
          dateProcessed: null,
        });
        state.friendRequests = state.friendRequests.filter(
          (request) => request.friendshipId !== friendshipId
        );
      }
    },
    clearResponse(state) {
      state.response = [];
    },
  },
});

export const friendsRequestsActions = friendRequestsSlice.actions;
export default friendRequestsSlice;

// [
//     {
//         "friendshipId": 32,
//         "requester": "88585ce5-3b37-498c-92ff-9b9d47cddfdd",
//         "requesterFirstName": "Rocio",
//         "requesterLastName": "Pupo",
//         "recipient": "561f9a28-9318-4ff0-a86b-78596e55ec90",
//         "status": null,
//         "dateRequested": "2023-09-27",
//         "dateProcessed": null
//     }
// ]
