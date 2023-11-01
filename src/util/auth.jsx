import { redirect } from "react-router-dom";
import keycloak from "./keycloak";

export function getAuthToken() {
  const token = keycloak.token;
  console.log("token");
  if (!token) {
    console.log("token before REFRESHED");
    keycloak
      .updateToken()
      .then((refreshed) => {
        if (refreshed) {
          console.log("token REFRESHED");
          const token = keycloak.token;
          return token;
        } else {
          console.log(
            "Token not refreshed, or the session is no longer active."
          );
          // You may want to log the user out or request reauthentication in this case.
        }
      })
      .catch((error) => {
        console.error("Token refresh failed:", error);
        // Handle the error, e.g., by logging out the user or displaying an error message.
      });
  }
  return token;
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/");
  }
  return null;
}

export function tokenLoader() {
  const token = getAuthToken();
  return token;
}
