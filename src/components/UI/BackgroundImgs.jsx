import snowflake from "../../assets/snowflake.png";
import tree from "../../assets/tree.png";
import snowflakeData from "../../util/snowflakeData";
import treeData from "../../util/treeData";
import classes from "./BackgroundImgs.module.css";
const BackgroundImgs = () => {
  return (
    <div>
      {snowflakeData.map((items) => {
        return (
          <img
            key={items.id}
            className={classes[items.style]}
            src={snowflake}
            alt="snowflake"
          ></img>
        );
      })}
      {treeData.map((items) => {
        return (
          <img
            key={items.id}
            className={classes[items.style]}
            src={tree}
            alt="tree"
          ></img>
        );
      })}
    </div>
  );
};

export default BackgroundImgs;
