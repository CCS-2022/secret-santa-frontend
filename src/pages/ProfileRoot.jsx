import { Fragment } from "react";
import ProfileNav from "../components/Profile/ProfileNav";
import { Outlet } from "react-router-dom";
import keycloak from "../util/keycloak";

export default function ProfileRoot() {
  const auth = keycloak.authenticated;

  return (
    <Fragment>
      {auth && (
        <Fragment>
          <ProfileNav></ProfileNav>
          <Outlet></Outlet>
        </Fragment>
      )}
      {!auth && (
        <Fragment>
          <h1 style={{ textAlign: "center" }}>Please Login</h1>
          {/* <ButtonUI>Login</ButtonUI> */}
        </Fragment>
      )}
    </Fragment>
  );
}
