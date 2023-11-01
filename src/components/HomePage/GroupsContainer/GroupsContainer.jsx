import classes from "./GroupsContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import ButtonUI from "../../UI/ButtonUI";
import { fetchGroupsMembers } from "../../../store/group-actions";

export default function GroupsContainer({ onClick }) {
  const dispatch = useDispatch();
  // current groups
  const fetchedGroups = useSelector((state) => state.groups.groups);

  async function getMembers(groupId) {
    dispatch(fetchGroupsMembers(groupId));
  }

  return (
    <div className={classes.groups}>
      <ul className={classes["groups-cluster"]}>
        {fetchedGroups.map((group) => (
          <li
            onClick={() => getMembers(group.groupId)}
            className={classes["group-id"]}
            key={group.groupId}
          >
            <p>{group.groupName}</p>
          </li>
        ))}
      </ul>

      <div className={classes["plus-button"]}>
        <ButtonUI onClick={onClick}>
          <FontAwesomeIcon className={classes["plus-icon"]} icon={faPlus} />
        </ButtonUI>
      </div>
    </div>
  );
}
