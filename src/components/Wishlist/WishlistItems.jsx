import { useState } from "react";
import { wishlistActions } from "../../store/wishlist-slice";
import classes from "./WishlistItems.module.css";
import { useDispatch, useSelector } from "react-redux";
import UpdateForm from "./UpdateForm";

const WishlistItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.wishlist);
  const [displayForm, setDisplayFrom] = useState(false);

  const showForm = (item) => {
    setDisplayFrom(true);
    dispatch(wishlistActions.updateWishlist(item));
  };

  const hideForm = () => {
    dispatch(wishlistActions.clearUpdateItem());
    setDisplayFrom(false);
  };

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
                <button
                  onClick={() => showForm(item)}
                  className={classes["wishlist-items__button"]}
                >
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

      {displayForm && <UpdateForm onClose={hideForm} />}
    </div>
  );
};
export default WishlistItems;
