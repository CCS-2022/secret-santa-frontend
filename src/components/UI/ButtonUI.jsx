import classes from "./Button.module.css";

const ButtonUI = (props) => {
  return (
    <button
      className={classes["main-button"]}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonUI;
