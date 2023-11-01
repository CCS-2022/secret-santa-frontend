import { Fragment } from "react";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </Fragment>
  );
};

export default Backdrop;
