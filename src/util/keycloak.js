import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "http://192.168.1.236:8080/",
  realm: "SecretSantaDev",
  clientId: "React-auth",
});

export default keycloak;
