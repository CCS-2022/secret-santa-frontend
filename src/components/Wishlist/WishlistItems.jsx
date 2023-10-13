import { wishlistActions } from "../../store/wishlist-slice";
import classes from "./WishlistItems.module.css";
import { useDispatch, useSelector } from "react-redux";

const WishlistItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.wishlist);

  function deleteItemHandler(itemId) {
    dispatch(wishlistActions.deleteFromWishlist(itemId));
  }

  return (
    <div className={classes["items-container"]}>
      <h1>Items</h1>
      <div className={classes["wishlist-items"]}>
        <ul className={classes["wishlist-items__ul"]}>
          {items.map((item) => (
            <li className={classes["wishlist-items__li"]} key={item.itemId}>
              <div className={classes["wishlist-items__item"]}>
                <p>Item Name</p>
                <p>{item.name}</p>
              </div>
              <hr />
              <div className={classes["wishlist-items__url"]}>
                <p>Item Url</p>
                <a href={item.itemUrl}>Link</a>
              </div>
              <hr />
              <div className={classes["wishlist-items__buttons"]}>
                <button className={classes["wishlist-items__button"]}>
                  Update
                </button>
                <button
                  onClick={() => deleteItemHandler(item.itemId)}
                  className={classes["wishlist-items__button"]}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default WishlistItems;
