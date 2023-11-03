import Backdrop from "../UI/Backdrop";
import classes from "./VerticalNavBar.module.css";
import keycloak from "../../util/keycloak";
import NavLinksIntro from "./NavLinksIntro";
import NavLinksMain from "./NavsLinksMain";

export default function VerticalNavBar(props) {
  return (
    <Backdrop onClose={props.onClose}>
      <div className={classes["vertical-nav"]}>
        {!keycloak.authenticated && <NavLinksIntro></NavLinksIntro>}
        {keycloak.authenticated && <NavLinksMain></NavLinksMain>}
        <h1>WHERE</h1>
      </div>
    </Backdrop>
  );
}
