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
import RequireAuth from "../apputils/RequireAuth/RequireAuth";

const routes = createBrowserRouter([
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
    children: [
      {
        path: "adduser",
        element: (
          <RequireAuth>
            <AddUser />
          </RequireAuth>
        ),
      },
      {
        path: "signup/:email",
        element: <SignupByInvite />,
      },
      {
        path: "users",
        element: (
          <RequireAuth>
            <UserManagement />
          </RequireAuth>
        ),
      },
      {
        path: "invite",
        element: (
          <RequireAuth>
            <UserInvite />
          </RequireAuth>
        ),
      },
      {
        path: "items",
        element: (
          <RequireAuth>
            <Items />
          </RequireAuth>
        ),
      },
      {
        path: "profile",
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
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
