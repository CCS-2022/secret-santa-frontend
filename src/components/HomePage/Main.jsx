import styles from "./Main.module.css";

import InstructionPage from "./InstructionPage";
import { Fragment } from "react";
import keycloak from "../../util/keycloak";
import ActionCall from "./ActionCall";
import MainHome from "./MainHome";
import BackgroundImgs from "../UI/BackgroundImgs";

export default function MainPage() {
  const authenticated = keycloak.authenticated;

  return (
    <Fragment>
      {authenticated ? (
        <MainHome></MainHome>
      ) : (
        <div className={styles.main}>
          <div className={styles["action-call"]}>
            <ActionCall></ActionCall>
            <InstructionPage></InstructionPage>
          </div>
        </div>
      )}
      <BackgroundImgs></BackgroundImgs>
    </Fragment>
  );
}
