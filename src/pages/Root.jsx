import { Fragment } from "react";
import MainNavigation from "../components/NavigationBar/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function RootLayout() {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </Fragment>
  );
}
