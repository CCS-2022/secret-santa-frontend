import keycloak from "../../util/keycloak";
import styles from "./InstructionPage.module.css";

export default function InstructionPage() {
  const handleLogin = () => {
    keycloak.login();
  };
  return (
    <div className={styles["main-instructions"]}>
      <div className={styles["main-top"]}>
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
      <button
        className={styles["main-button"]}
        type="button"
        onClick={handleLogin}
      >
        Get Started
      </button>
    </div>
  );
}
