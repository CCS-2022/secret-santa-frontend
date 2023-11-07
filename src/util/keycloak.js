import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "https://ss.cloudconsultingandsolutions.com/",
  realm: "SecretSantaDev",
  clientId: "React-auth",
});

export default keycloak;
