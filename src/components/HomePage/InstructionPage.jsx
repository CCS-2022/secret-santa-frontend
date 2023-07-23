import styles from "./InstructionPage.module.css";


export default function InstructionPage() {
  return (
    <div className={styles.main}>
      <div className={styles["main-steps"]}>
        <p className={styles["main-step__number"]}>1</p>
        <p className={styles["main-step__description"]}>Create your group</p>
      </div>
      <div className={styles["main-steps"]}>
        <p className={styles["main-step__number"]}>2</p>
        <p className={styles["main-step__description"]}>Add Participants</p>
      </div>
      <div className={styles["main-steps"]}>
        <p className={styles["main-step__number"]}>3</p>
        <p className={styles["main-step__description"]}>Get a match!</p>
      </div>

    </div>
  );
}
