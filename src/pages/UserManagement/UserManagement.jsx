import React from "react";
import UserList from "./UserList/UserList";

const UserManagement = () => {
  return (
    <div>
      <h2 className="text-center font-bold m-5 border">User List</h2>
      <div>
        <UserList />
      </div>
    </div>
  );
};

export default UserManagement;
