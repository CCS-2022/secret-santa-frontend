import classes from "./GroupForm.module.css";
// import { Form } from "react-router-dom";
import Backdrop from "../UI/Backdrop";
import ButtonUI from "../UI/ButtonUI";

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
          <ButtonUI type="submit">Add</ButtonUI>
          <ButtonUI type="button" onClick={props.onClose}>
            Cancel
          </ButtonUI>
        </div>
      </form>
    </Backdrop>
  );
};

export default GroupForm;
