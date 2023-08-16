import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
// import LoginPage from "./pages/Login";
import ErrorPage from "./pages/Error";
// import { checkAuthLoader } from "./util/auth";
import AboutPage from "./pages/About";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/:profile",
        element: <ProfilePage></ProfilePage>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
