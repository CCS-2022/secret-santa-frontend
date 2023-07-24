// import { redirect } from "react-router-dom";
import keycloak from "./keycloak";

export function checkAuthLoader() {
  if (!keycloak.authenticated) {
    keycloak.login();
  }
  return null;
}

// export function isAuthenticated() {
//   keycloak
//     .init({ onLoad: "check-sso" })
//     .then((authenticated) => {
//       // setAuthenticated(authenticated);
//     })
//     .catch((error) => {
//       console.error("Keycloak initialization error:", error);
//     });

//   const authenticated = keycloak.authenticated;
//   return authenticated;
// }
