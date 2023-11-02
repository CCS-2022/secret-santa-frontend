import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "https://auth.cloudconsultingandsolutions.com/",
  realm: "SecretSantaDev",
  clientId: "React-auth",
});

export default keycloak;
