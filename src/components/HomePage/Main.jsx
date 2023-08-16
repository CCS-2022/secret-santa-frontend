import styles from "./Main.module.css";

import snowflake from "../../assets/snowflake.png";
import tree from "../../assets/tree.png";
import snowflakeData from "../../util/snowflakeData";
import treeData from "../../util/treeData";
import InstructionPage from "./InstructionPage";
import { Fragment } from "react";
import keycloak from "../../util/keycloak";
import ActionCall from "./ActionCall";
import MainHome from "./MainHome";

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
      <div>
        {snowflakeData.map((items) => {
          return (
            <img
              key={items.id}
              className={styles[items.style]}
              src={snowflake}
              alt="snowflake"
            ></img>
          );
        })}
        {treeData.map((items) => {
          return (
            <img
              key={items.id}
              className={styles[items.style]}
              src={tree}
              alt="tree"
            ></img>
          );
        })}
      </div>
    </Fragment>
  );
}
