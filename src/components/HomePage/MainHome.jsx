import styles from "./MainHome.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import Backdrop from "../UI/Backdrop";
import GroupForm from "./GroupForm";

const MainHome = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const showForm = () => {
    setDisplayForm(true);
  };

  const hideForm = () => {
    setDisplayForm(false);
  };
  return (
    <div className={styles.layout}>
      <div className={styles.groups}>
        <div className={styles["groups-cluster"]}>
          <p className={styles["group-id"]}>Group 1</p>
          <p className={styles["group-id"]}>Group 2</p>
          <p className={styles["group-id"]}>Group 3</p>
          <p className={styles["group-id"]}>Group 4</p>
          <p className={styles["group-id"]}>Group 5</p>
          <p className={styles["group-id"]}>Group 1</p>
          <p className={styles["group-id"]}>Group 2</p>
          <p className={styles["group-id"]}>Group 3</p>
          <p className={styles["group-id"]}>Group 4</p>
          <p className={styles["group-id"]}>Group 5</p>
        </div>
        <div>
          <button className={styles["plus-button"]} onClick={showForm}>
            <FontAwesomeIcon className={styles["plus-icon"]} icon={faPlus} />
          </button>
        </div>
      </div>
      <div className={styles.characteristics}>
        <h1>Group Name</h1>
        <div className={styles["characteristics-friends"]}>
          <p className={styles["characteristics-friends__item"]}>Friend 1</p>
          <p className={styles["characteristics-friends__item"]}>Friend 2</p>
          <p className={styles["characteristics-friends__item"]}>Friend 3</p>
          <p className={styles["characteristics-friends__item"]}>Friend 4</p>
          <p className={styles["characteristics-friends__item"]}>Friend 5</p>
          <p className={styles["characteristics-friends__item"]}>Friend 1</p>
          <p className={styles["characteristics-friends__item"]}>Friend 2</p>
          <p className={styles["characteristics-friends__item"]}>Friend 3</p>
          <p className={styles["characteristics-friends__item"]}>Friend 4</p>
          <p className={styles["characteristics-friends__item"]}>Friend 5</p>
          <p className={styles["characteristics-friends__item"]}>Friend 1</p>
          <p className={styles["characteristics-friends__item"]}>Friend 2</p>
          <p className={styles["characteristics-friends__item"]}>Friend 3</p>
          <p className={styles["characteristics-friends__item"]}>Friend 4</p>
          <p className={styles["characteristics-friends__item"]}>Friend 5</p>
          <p className={styles["characteristics-friends__item"]}>Friend 1</p>
          <p className={styles["characteristics-friends__item"]}>Friend 2</p>
          <p className={styles["characteristics-friends__item"]}>Friend 3</p>
          <p className={styles["characteristics-friends__item"]}>Friend 4</p>
          <p className={styles["characteristics-friends__item"]}>Friend 5</p>
          <p className={styles["characteristics-friends__item"]}>Friend 1</p>
          <p className={styles["characteristics-friends__item"]}>Friend 2</p>
          <p className={styles["characteristics-friends__item"]}>Friend 3</p>
          <p className={styles["characteristics-friends__item"]}>Friend 4</p>
          <p className={styles["characteristics-friends__item"]}>Friend 5</p>
          <p className={styles["characteristics-friends__item"]}>Friend 1</p>
          <p className={styles["characteristics-friends__item"]}>Friend 2</p>
          <p className={styles["characteristics-friends__item"]}>Friend 3</p>
          <p className={styles["characteristics-friends__item"]}>Friend 4</p>
          <p className={styles["characteristics-friends__item"]}>Friend 5</p>
        </div>
        <div className={styles["characteristics__buttons"]}>
          <button className={styles["characteristics__button"]}>
            Add friend
          </button>
          <button className={styles["characteristics__button"]}>Shuffle</button>
        </div>
      </div>
      {displayForm && <GroupForm onClose={hideForm}></GroupForm>}

      {/* <Modal></Modal> */}
    </div>
  );
};

export default MainHome;
