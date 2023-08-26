import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  realm: "secret-santa",
  clientId: "React-auth",
});

export default keycloak;
