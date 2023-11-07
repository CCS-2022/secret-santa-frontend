import tree from "../../assets/tree.png";
import treeData from "../../util/treeData";
import classes from "./BackgroundImgs.module.css";

const TreeImg = () => {
  return (
    <>
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
    </>
  );
};

export default TreeImg;
