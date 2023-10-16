import { useState } from "react";
import ButtonUI from "../UI/ButtonUI";
import classes from "./WishlistForm.module.css";
import { useDispatch } from "react-redux";
import { wishlistActions } from "../../store/wishlist-slice";

const WishlistForm = () => {
  const [item, setItem] = useState("");
  const [itemUrl, setItemUrl] = useState("");
  const dispatch = useDispatch();
  function itemChangehandler(event) {
    setItem(event.target.value);
  }

  function itemUrlChangehandler(event) {
    setItemUrl(event.target.value);
  }

  function addItemHandler(event) {
    event.preventDefault();
    dispatch(
      wishlistActions.addToWishlist({
        name: item,
        itemUrl: itemUrl,
        groupId: null,
      })
    );
    setItem("");
    setItemUrl("");
  }

  return (
    <div className={classes["form-container"]}>
      <h1>WishlistTab</h1>
      <div className={classes["profile-tabs"]}>
        <form onSubmit={addItemHandler} className={classes["main-form"]}>
          <input
            className={classes["main-form__item"]}
            id="itemName"
            type="text"
            name="title"
            value={item}
            onChange={itemChangehandler}
            placeholder="Item Name"
          />
          <input
            className={classes["main-form__item"]}
            id="itemUrl"
            type="text"
            name="title"
            value={itemUrl}
            onChange={itemUrlChangehandler}
            placeholder="Item Link"
          />
          <ButtonUI type="submit">Add Item</ButtonUI>
        </form>
      </div>
    </div>
  );
};

export default WishlistForm;
