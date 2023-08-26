import { createStore } from "redux";
import keycloak from "../util/keycloak";

const authKeycloak = keycloak.authenticated;

const keycloakReducer = (state = { authenticated: authKeycloak }, action) => {
  if (action.type == "login") {
    keycloak
      .init({ onLoad: "check-sso", pkceMethod: "S256" })
      .then((authenticatedStatus) => {
        console.log(authenticatedStatus);
      })
      .catch((error) => {
        console.error("Keycloak initialization error:", error);
      });

    keycloak.login();
    return {
      authenticated: state.authKeycloak,
    };
  }

  if (action.type == "logout") {
    keycloak.logout();
    return {
      authenticated: state.authKeycloak,
    };
  }

  return state;
};

const store = createStore(keycloakReducer);

export default store;
