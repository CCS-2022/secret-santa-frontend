import keycloak from "../../util/keycloak";
import classes from "./ProfileTab.module.css";

import ButtonUI from "../UI/ButtonUI";

const ProfileTab = () => {
  console.log(keycloak.idTokenParsed.name);

  function changePaswordHandler() {
    keycloak.accountManagement();
  }

  return (
    <div className={classes["profile-tab"]}>
      <h1>Account Information</h1>
      <div className={classes["profile-info"]}>
        <div className={classes["profile-info__name"]}>
          <h3 className={classes["profile-info__name-item"]}>Name</h3>
          <h3>{keycloak.idTokenParsed.name}</h3>
        </div>
        <hr />
        <div className={classes["profile-info__name"]}>
          <h3>Email</h3>
          <h3>{keycloak.idTokenParsed.email}</h3>
        </div>
        <hr />
        <ButtonUI
          onClick={changePaswordHandler}
          className={classes["profile-info__button"]}
        >
          Change Password
        </ButtonUI>
      </div>
    </div>
  );
};

export default ProfileTab;
