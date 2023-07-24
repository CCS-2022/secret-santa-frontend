import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ErrorPage from "./pages/Error";
import { checkAuthLoader } from "./util/auth";
import AboutPage from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "login",
        element: <LoginPage></LoginPage>,
        loader: checkAuthLoader,
      },
      {
        path: "about",
        element: <AboutPage></AboutPage>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
