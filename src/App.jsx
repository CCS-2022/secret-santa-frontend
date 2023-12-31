import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProfileTab from "./components/Profile/ProfileTab";
import WishlistTab from "./components/Profile/WishlistTab";
import ProfileRoot from "./pages/ProfileRoot";
import FriendsTab from "./components/Profile/FriendsTab";
import CreateGroupPage from "./pages/CreateGroup";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriendsData } from "./store/friend-actions";
import { createNewGroup, fetchGroupsData } from "./store/group-actions";
import {
  fetchFriendRequestsData,
  friendRequestsResponse,
} from "./store/friendRequest-actions";
import {
  createWishlistItem,
  deleteItemFromWishlist,
  fetchWishlistData,
} from "./store/wishlist-actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    // errorElement: <ErrorPage></ErrorPage>,

    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/create-group",
        element: <CreateGroupPage />,
      },
      {
        path: "/profile",
        element: <ProfileRoot></ProfileRoot>,
        children: [
          {
            index: true,
            element: <ProfileTab></ProfileTab>,
          },
          {
            path: "my-friends",
            element: <FriendsTab></FriendsTab>,
          },
          {
            path: "wishlist",
            element: <WishlistTab></WishlistTab>,
          },
        ],
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const group = useSelector((state) => state.groups);
  const response = useSelector((state) => state.friendRequests.response);
  const wishlist = useSelector((state) => state.wishlist);

  // ====================================== GET FRIENDS FOR ADDING TO GROUP ============================================
  // FETCH FRIENDS
  useEffect(() => {
    dispatch(fetchFriendsData());
  }, [response, dispatch]);

  // CREATE GROUP
  useEffect(() => {
    if (group.addGroupUpdate) {
      dispatch(createNewGroup(group));
    }
  }, [group.addGroup, dispatch]);

  // FETCH GROUPS
  useEffect(() => {
    dispatch(fetchGroupsData());
  }, [group.addGroup, dispatch]);

  // FETCH FRIEND REQUESTS
  useEffect(() => {
    dispatch(fetchFriendRequestsData());
  }, [dispatch]);

  // RESPOND TO FRIEND REQUEST
  useEffect(() => {
    dispatch(friendRequestsResponse(response));
  }, [response, dispatch]);

  // FETCH WISHLIST
  useEffect(() => {
    dispatch(fetchWishlistData());
  }, [wishlist.addItem, dispatch]);
  // ADD ITEM
  useEffect(() => {
    if (wishlist.addItemUpdate) {
      dispatch(createWishlistItem(wishlist));
    }
  }, [wishlist.addItem, dispatch]);

  //Delete ITEM
  useEffect(() => {
    if (wishlist.addItemUpdate) {
      dispatch(deleteItemFromWishlist(wishlist));
    }
  }, [wishlist.deleteItem, dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
