import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h5>©Copyright 2023</h5>
      <p className={classes["footer-company"]}>CC&S</p>
    </div>
  );
};

export default Footer;
