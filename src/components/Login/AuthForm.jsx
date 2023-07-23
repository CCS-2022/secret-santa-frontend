import classes from "./AuthForm.module.css";
import  { Fragment } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Form, Link, useSearchParams } from "react-router-dom";

export default function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <Fragment>
      <Form method="post" className={classes["login-form"]}>
        <h1 className={classes["login-form__title"]}>
          {isLogin ? "Sign in" : "Create new account"}
        </h1>
        {!isLogin && (
          <div className={classes["login-form__details"]}>
            <input
              className={`${classes["login-form__input"]} ${classes.name}`}
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
              
            />

            <input
              className={`${classes["login-form__input"]} ${classes.name}`}
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
            />
          </div>
        )}

        <input
          className={`${classes["login-form__input"]} ${classes['user-details']}`}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <input
          className={`${classes["login-form__input"]} ${classes['user-details']}`}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        {!isLogin && (
          <input
          className={`${classes["login-form__input"]} ${classes['user-details']}`}
            type="text"
            id="adress"
            name="address"
            placeholder="Street Adress"
          />
        )}
        {!isLogin && (
          <div className={classes["login-form__details"]}>
            <input
              className={`${classes["login-form__input"]} ${classes["address-details"]}`}
              type="text"
              id="unit"
              name="unit"
              placeholder="Unit #"
            />

            <input
              className={`${classes["login-form__input"]} ${classes["address-details"]}`}
              type="text"
              id="city"
              name="city"
              placeholder="City"
            />

            <input
              className={`${classes["login-form__input"]} ${classes["address-details"]}`}
              type="text"
              id="state"
              name="state"
              placeholder="State"
            />

            <input
              className={`${classes["login-form__input"]} ${classes["address-details"]}`}
              type="text"
              id="zip"
              name="zip"
              placeholder="Zip Code"
            />
          </div>
        )}
        <Link
          to={`?mode=${isLogin ? "signup" : "login"}`}
          className={classes["login-form__button--invisible"]}
        >
          {isLogin
            ? "Don't have an account? Sign up!"
            : "Have an account? Sign in!"}
        </Link>
        <button className={classes["login-form__button"]} type="submit">
          Submit
        </button>
      </Form>
    </Fragment>
  );
}
