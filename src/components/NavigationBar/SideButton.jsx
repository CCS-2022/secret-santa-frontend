import classes from "./SideButton.module.css";

const SideButton = () => {
  return (
    <button className={classes["toggle-button"]}>
      <span className={classes["toggle-button__bar"]}></span>
      <span className={classes["toggle-button__bar"]}></span>
      <span className={classes["toggle-button__bar"]}></span>
    </button>
  );
};

export default SideButton;
