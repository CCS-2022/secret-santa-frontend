import snowflake from "../../assets/snowflake.png";
import snowflakeData from "../../util/snowflakeData";
import classes from "./BackgroundImgs.module.css";
const SnowImg = () => {
  return (
    <>
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
    </>
  );
};

export default SnowImg;
