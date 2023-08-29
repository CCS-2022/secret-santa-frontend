import styles from "./ActionCall.module.css";

const ActionCall = () => {
  return (
    <div className={styles["main-intro"]}>
      <h1 className={styles["main-message__one"]}>
        Make gift giving with others memorable!
      </h1>
      <h3 className={styles["main-message__two"]}>
        Get randomly matched to a friend, coworker, or family member and get an
        email sent to you with your match.
      </h3>
    </div>
  );
};

export default ActionCall;
