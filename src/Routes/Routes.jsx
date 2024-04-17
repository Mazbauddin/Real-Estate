import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage";
import UserProfile from "../Pages/UserProfile";
import UpdateProfile from "../Pages/UpdateProfile";
import EstateDetails from "../Pages/Estate Details/EstateDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/estates-details/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
        // loader: ({ params }) => fetch(`${"/fakeData.json"}/${params.id}`),
      },
      {
        path: "/UserProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/UpdateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
