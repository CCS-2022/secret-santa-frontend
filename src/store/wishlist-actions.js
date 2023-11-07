import { getAuthToken } from "../util/auth";
import baseFetchUrl from "../util/requests";
import { wishlistActions } from "./wishlist-slice";

export const fetchWishlistData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const token = getAuthToken();
      const response = await fetch(baseFetchUrl + "secret-santa/item", {
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
      const wishlistData = await fetchData();
      dispatch(
        wishlistActions.getWishlist({
          wishlist: wishlistData || [],
        })
      );
    } catch (error) {
      // console.log("Error");
    }
  };
};

// ===================================
export const createWishlistItem = (newItem) => {
  return async (dispatch) => {
    const token = getAuthToken();
    const createItemBody = newItem.addItem || [];
    try {
      const response = await fetch(baseFetchUrl + "secret-santa/item", {
        method: "POST",
        body: JSON.stringify(createItemBody),
        headers: {
          "Content-Type": "application/JSON",
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to respond to friend request");
      }
      dispatch(wishlistActions.clearAddItem());
    } catch (error) {
      // Handle the error (e.g., show a notification to the user).
      throw error;
    }
  };
};

// ===================================
export const deleteItemFromWishlist = (item) => {
  return async (dispatch) => {
    const token = getAuthToken();
    const deleteItemBody = item.deleteItem[0] || {};

    try {
      const response = await fetch(baseFetchUrl + "secret-santa/item/remove", {
        method: "POST",
        body: JSON.stringify(deleteItemBody),
        headers: {
          "Content-Type": "application/JSON",
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to respond to friend request");
      }
      dispatch(wishlistActions.clearDeleteItem());
    } catch (error) {
      // Handle the error (e.g., show a notification to the user).
      throw error;
    }
  };
};

// ===================================
export const updateItemFromWishlist = (item) => {
  return async (dispatch) => {
    const token = getAuthToken();
    const createBody = {
      itemId: item.itemId,
      name: item.name,
      itemUrl: item.itemUrl,
      groupId: item.groupId,
      userId: item.userId,
    };

    try {
      const response = await fetch(baseFetchUrl + "secret-santa/item/update", {
        method: "POST",
        body: JSON.stringify(createBody),
        headers: {
          "Content-Type": "application/JSON",
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to respond to friend request");
      }
      dispatch(wishlistActions.clearUpdateItem());
      dispatch(fetchWishlistData());
    } catch (error) {
      throw error;
    }
  };
};
