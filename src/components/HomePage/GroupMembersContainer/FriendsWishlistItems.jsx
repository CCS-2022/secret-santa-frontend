import { useSelector } from "react-redux";
import Backdrop from "../../UI/Backdrop";
import ButtonUI from "../../UI/ButtonUI";
import { useEffect, useState } from "react";
import { getAuthToken } from "../../../util/auth";
import baseFetchUrl from "../../../util/requests";
import classes from "./FriendsWishlistItems.module.css";
const FriendsWishlistItems = (props) => {
  const fetchedUserId = useSelector((state) => state.wishlist.userId);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();
        const response = await fetch(
          baseFetchUrl +
            "secret-santa/item/get-user-wishlist?userId=" +
            fetchedUserId,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        if (!response.ok) {
          console.log("Fetching Wishlist Items Failed.");
        } else {
          const data = await response.json();
          console.log(data);
          setWishlistItems(data);
        }
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      }
    };

    fetchData();
  }, []);

  async function handleGetWishlistEmail() {
    const token = getAuthToken();
    const response = await fetch(
      baseFetchUrl +
        "secret-santa/item/get-wishlist-email?userId=" +
        fetchedUserId,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    if (!response.ok) {
      console.log("Sending Wishlist Items Failed.");
    } else {
      const data = await response.json();
      console.log(data);
    }
  }

  return (
    <Backdrop onClose={props.onClose}>
      <div className={classes["wishlist-items"]}>
        <h1 className={classes["wishlist-items__title"]}>WHISLIST ITEMS</h1>
        <ul className={classes["wishlist-items__ul"]}>
          {wishlistItems.map((item) => (
            <div>
              <li className={classes["wishlist-items__li"]} key={item.itemId}>
                <h3 className={classes["wishlist-items__li-item"]}>
                  {item.name}
                </h3>
                <a
                  className={classes["wishlist-items__li-a"]}
                  href={item.itemUrl}
                >
                  Link
                </a>
              </li>
              <hr />
            </div>
          ))}
        </ul>

        {wishlistItems.length === 0 && <p>Wishlist Items Empty...</p>}
        <div className={classes["wishlist-items__buttons"]}>
          <ButtonUI onClick={handleGetWishlistEmail}>
            Get Wishlist Email
          </ButtonUI>
          <ButtonUI onClick={props.onClose}>Cancel</ButtonUI>
        </div>
      </div>
    </Backdrop>
  );
};

export default FriendsWishlistItems;
