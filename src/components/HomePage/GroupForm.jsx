import classes from "./GroupForm.module.css";
// import { Form } from "react-router-dom";
import Backdrop from "../UI/Backdrop";

const GroupForm = (props) => {
  return (
    <Backdrop onClose={props.onClose}>
      <form className={classes["form-group"]}>
        <h1>Add Group</h1>
        <label htmlFor="GroupName">Group Name</label>
        <input
          className={classes["form-group__input"]}
          id="title"
          type="text"
          name="title"
          required
        />

        <div>
          <button className={classes["form-group__button"]} type="submit">
            Add
          </button>
          <button
            className={classes["form-group__button"]}
            type="button"
            onClick={props.onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Backdrop>
  );
};

export default GroupForm;
