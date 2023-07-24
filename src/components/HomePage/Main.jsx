import styles from "./Main.module.css";
import snowflake from "../../assets/snowflake.png";
import tree from "../../assets/tree.png";
import snowflakeData from "../../util/snowflakeData";
import treeData from "../../util/treeData";
import InstructionPage from "./InstructionPage";
import { Fragment } from "react";
import keycloak from "../../util/keycloak";

export default function MainPage() {
  const handleLogout = () => {
    keycloak.logout({ redirectUri: "http://localhost:5173/" });
  };
  const handleLogin = () => {
    keycloak.login();
  };

  const authenticated = keycloak.authenticated;

  return (
    <Fragment>
      {authenticated ? (
        <div>
          <h1>Hello</h1>
          <button
            className={styles["main-button"]}
            type="button"
            onClick={handleLogout}
          >
            Log Out
          </button>
          {/* <h1>TOKEN: </h1>
          <p>{keycloak.token}</p> */}
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles["main-intro"]}>
            <h1 className={styles["main-message__one"]}>
              Make gift giving with others memorable!
            </h1>
            <h3 className={styles["main-message__two"]}>
              Get randomly matched to a friend, coworker, or family member and
              get an email sent to you with your match.
            </h3>
          </div>
          <div className={styles["main-instructions"]}>
            <InstructionPage></InstructionPage>

            <button
              className={styles["main-button"]}
              type="button"
              onClick={handleLogin}
            >
              Get Started
            </button>
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
