import { Fragment } from "react";
import MainNavigation from "../components/NavigationBar/MainNavigation";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet></Outlet>
      </main>
    </Fragment>
  );
}
