import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "https://192.168.1.236:8443/",
  realm: "SecretSantaDev",
  clientId: "React-auth",
});

export default keycloak;
