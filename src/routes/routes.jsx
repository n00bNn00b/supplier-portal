import { createBrowserRouter } from "react-router-dom";
import SignIn from "../SignIn";
import Home from "../pages/Home/Home";
import AddUser from "../pages/UserManagement/AddUser/AddUser";
import Items from "../pages/Items/Items";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import UserManagement from "../pages/UserManagement/UserManagement";
import UserInvite from "../pages/UserManagement/UserInvite/UserInvite";
import SignupByInvite from "../pages/UserManagement/UserInvite/SignupByInvite/SignupByInvite";

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
        path: "signup/:email",
        element: <SignupByInvite />,
      },
      {
        path: "users",
        element: <UserManagement />,
      },
      {
        path: "invite",
        element: <UserInvite />,
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
