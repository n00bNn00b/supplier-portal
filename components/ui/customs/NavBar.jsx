import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Button } from "../button";
import {
  Hexagon,
  List,
  LucideUserPlus,
  MenuIcon,
  Send,
  UserPlus,
  UserRoundIcon,
  Users,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sidebar
      className="h-full bottom-0 top-0 left-0  sticky"
      collapsed={open}
      transitionDuration={600}
    >
      {/* <Hexagon className="w-full text-red-500 h-12 mb-3" />
       */}
      <Link to="/">
        <img src="https://i.ibb.co/kD2P042/Supplier-Portal.jpg" alt="logo" />
      </Link>
      <hr className="mb-3" />
      <Button
        onClick={() => setOpen(!open)}
        size="icon"
        variant="outline"
        className={open ? "flex mx-auto border-0 " : "flex mx-auto "}
      >
        {!open ? (
          <X className="transform hover:rotate-180 transition duration-500" />
        ) : (
          <MenuIcon className="transform hover:rotate-180 transition duration-300" />
        )}
      </Button>
      <Menu closeOnClick={open}>
        <SubMenu label="User Management" icon={<UserPlus />}>
          <MenuItem
            icon={<LucideUserPlus />}
            component={<Link to="/adduser" />}
          >
            Add User
          </MenuItem>
          <MenuItem icon={<Users />} component={<Link to="/users" />}>
            All Users
          </MenuItem>
          <MenuItem icon={<Send />} component={<Link to="/invite" />}>
            Invite a User
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<List />} component={<Link to="/items" />}>
          Items
        </MenuItem>
        <MenuItem icon={<UserRoundIcon />} component={<Link to="/profile" />}>
          Profile
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default NavBar;
