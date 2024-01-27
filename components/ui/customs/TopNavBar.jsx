import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../navigation-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Bell, Power } from "lucide-react";
import { Button } from "../button";

const TopNavBar = () => {
  return (
    <nav className="border-b-2 flex flex-row-reverse shadow-xl h-11 sticky top-0 z-50 bg-background">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tasks</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[200px] lg:w-[200px] lg:grid-cols-1">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link to="/">Task List</Link>
                  </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link to="/">Task List 2</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="pr-5">
            <Button variant="outline" size="icon" className="border-0">
              <Bell />
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className="border-0  text-white hover:text-yellow-200 bg-destructive hover:bg-destructive">
              <Power className="mr-2" /> Logout
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default TopNavBar;
