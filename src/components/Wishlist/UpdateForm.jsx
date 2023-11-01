import classes from "./UpdateForm.module.css";

import Backdrop from "../UI/Backdrop";
import ButtonUI from "../UI/ButtonUI";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateItemFromWishlist } from "../../store/wishlist-actions";

const UpdateForm = (props) => {
  // Stayed Here Dispatch Update to backend is the next step
  const dispatch = useDispatch();
  const currentItem = useSelector((state) => state.wishlist.itemToUpdate);
  console.log(currentItem);
  const [itemName, setItemName] = useState(currentItem[0].name);
  const [url, setUrl] = useState(currentItem[0].itemUrl);
  function itemNameHandler(event) {
    setItemName(event.target.value);
    console.log(event.target.value);
  }

  function urlHandler(event) {
    setUrl(event.target.value);
  }

  // ======================================= FORM SUBMITTAL ========================================
  function formSubmitHandler(event) {
    event.preventDefault();
    dispatch(
      updateItemFromWishlist({
        itemId: currentItem[0].itemId,
        name: itemName,
        itemUrl: url,
        groupId: null,
        userId: currentItem[0].userId,
      })
    );
    console.log("Form Submitted");
    setItemName("");
    setUrl("");
    props.onClose();
  }

  return (
    <Backdrop onClose={props.onClose}>
      <form onSubmit={formSubmitHandler} className={classes["form-group"]}>
        <h1>Update Item</h1>
        <label htmlFor="GroupName">Item Name</label>
        <input
          className={classes["form-group__input"]}
          id="title"
          type="text"
          name="title"
          value={itemName}
          onChange={itemNameHandler}
          required
        />
        <label htmlFor="GroupName">Item URL</label>
        <input
          className={classes["form-group__input"]}
          id="title"
          type="text"
          name="title"
          value={url}
          onChange={urlHandler}
          required
        />

        <div className={classes.buttons}>
          <ButtonUI type="submit">Update</ButtonUI>
          <ButtonUI type="button" onClick={props.onClose}>
            Cancel
          </ButtonUI>
        </div>
      </form>
    </Backdrop>
  );
};

export default UpdateForm;
