import classes from "./MainHome.module.css";
import { useState } from "react";
import GroupForm from "../GroupsContainer/GroupForm";
import GroupsContainer from "../GroupsContainer/GroupsContainer";
import GroupsMembersContainer from "../GroupMembersContainer/GroupMembersContainer";

const MainHome = () => {
  const [displayForm, setDisplayFrom] = useState(false);

  const showForm = () => {
    setDisplayFrom(true);
  };

  const hideForm = () => {
    setDisplayFrom(false);
  };

  return (
    <div className={classes.layout}>
      <GroupsContainer onClick={showForm} />
      <GroupsMembersContainer />
      {displayForm && <GroupForm onClose={hideForm}></GroupForm>}
    </div>
  );
};

export default MainHome;
