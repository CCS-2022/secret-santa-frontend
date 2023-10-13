import { redirect } from "react-router-dom";
import keycloak from "./keycloak";

export function checkAuthLoader() {
  if (!keycloak.authenticated) {
    return redirect("/");
  }
  return null;
}

export function getAuthToken() {
  const token = keycloak.token;
  // localStorage.setItem(token, 1);
  // const token = localStorage.getItem("1");
  // console.log(token);

  if (!token) {
    return null;
  }
  return token;
}

export function tokenLoader() {
  const token = getAuthToken();
  // localStorage.setItem(token, 1);

  return token;
}
