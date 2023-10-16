import { redirect } from "react-router-dom";
import keycloak from "./keycloak";

export function getAuthToken() {
  const token = keycloak.token;
  if (!token) {
    return null;
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
