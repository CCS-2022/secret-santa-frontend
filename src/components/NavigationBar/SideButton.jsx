import classes from "./SideButton.module.css";

const SideButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes["toggle-button"]}>
      <span className={classes["toggle-button__bar"]}></span>
      <span className={classes["toggle-button__bar"]}></span>
      <span className={classes["toggle-button__bar"]}></span>
    </button>
  );
};

export default SideButton;
