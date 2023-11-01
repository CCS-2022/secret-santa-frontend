import { createSlice } from "@reduxjs/toolkit";
import keycloak from "../util/keycloak";

const wishlistSlice = createSlice({
  name: "friends",
  initialState: {
    wishlist: [],
    addItem: [],
    deleteItem: [],
    addItemUpdate: false,
    itemToUpdate: [],
  },
  reducers: {
    getWishlist(state, action) {
      state.wishlist = action.payload.wishlist;
    },
    addToWishlist(state, action) {
      const { name, itemUrl, groupId } = action.payload;
      console.log(name);
      console.log(itemUrl);
      console.log(groupId);
      state.addItem.push({
        name: name,
        itemUrl: itemUrl,
        groupId: groupId,
      });
      state.addItemUpdate = !state.addItemUpdate;
    },
    updateWishlist(state, action) {
      const { name, itemId, itemUrl, groupId, userId } = action.payload;
      state.itemToUpdate.push({
        name: name,
        itemId: itemId,
        itemUrl: itemUrl,
        groupId: groupId,
        userId: userId,
      });
      state.addItemUpdate = !state.addItemUpdate;
    },
    deleteFromWishlist(state, action) {
      const itemToDelete = action.payload;
      // const existingItem = state.wishlist.find(
      //   (item) => item.itemId === itemToDelete
      // );
      state.wishlist = state.wishlist.filter(
        (item) => item.itemId !== itemToDelete
      );
      state.deleteItem.push({ itemId: itemToDelete, userId: keycloak.subject });
      state.addItemUpdate = !state.addItemUpdate;
    },
    clearAddItem(state) {
      state.addItem = [];
      state.addItemUpdate = !state.addItemUpdate;
    },
    clearDeleteItem(state) {
      state.deleteItem = [];
      state.addItemUpdate = !state.addItemUpdate;
    },
    clearUpdateItem(state) {
      state.itemToUpdate = [];
      state.addItemUpdate = !state.addItemUpdate;
    },
  },
});

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice;

// {
//     "itemId": 1,
//     "name": "Soccer Ball",
//     "itemUrl": "https://www.amazon.com/American-Challenge-Soccer-Ball-White-Aqua-Lime-Orange/dp/B07L47Q2FK/ref=sr_1_25_sspa?crid=1DKOFXXTV3DXF&keywords=golden%2Bjabulani%2Bsoccer%2Bball%2Bworld%2Bcup%2B2010%2Bofficial&qid=1696783895&sprefix=golden%2Bjabulani%2Bsoccer%2Bball%2Bworld%2Bcup%2B2010%2Bofficial%2Caps%2C97&sr=8-25-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1&psc=1",
//     "groupId": null,
//     "userId": "b00e2f84-3473-4911-8f92-afc019b5c68f"
// }
