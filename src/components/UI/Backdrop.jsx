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

// import { Fragment } from "react";
// import classes from "./Modal.module.css";
// import { ReactDOM } from "react-dom";

// const ShadedArea = (props) => {
//   return <div className={classes.backdrop} onClick={props.onClose}></div>;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className={classes.modal}>
//       <div className={classes.content}>{props.children}</div>
//     </div>
//   );
// };

// const portalElement = document.getElementById("overlays");

// const Backdrop = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(<ShadedArea></ShadedArea>, portalElement)}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };

// export default Backdrop;
