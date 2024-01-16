import { createBrowserRouter } from "react-router-dom";
import SignIn from "../SignIn";
import Home from "../pages/Home/Home";
import AddUser from "../pages/UserManagement/AddUser/AddUser";
import UserList from "../pages/UserManagement/UserList/UserList";
import Items from "../pages/Items/Items";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";

const routes = createBrowserRouter([
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "adduser",
        element: <AddUser />,
      },
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: "items",
        element: <Items />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },

  // {
  //   path: "/",
  //   element: <Home />,
  // },

  // {
  //   path: "/users",
  //   //   element: <UserList />,
  // },
]);

export default routes;
