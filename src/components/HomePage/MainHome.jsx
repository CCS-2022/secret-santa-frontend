import styles from "./MainHome.module.css";

const MainHome = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.groups}>
        <p>Group 1</p>
        <p>Group 2</p>
        <p>Group 3</p>
        <p>Group 4</p>
        <p>Group 5</p>
      </div>
      <div className={styles.characteristics}>
        <p>Group 1</p>
        <p>Group 2</p>
        <p>Group 3</p>
        <p>Group 4</p>
        <p>Group 5</p>
      </div>
    </div>
  );
};

export default MainHome;
