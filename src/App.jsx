import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SignIn from "./SignIn";
import React from "react";
import NavBar from "@/components/ui/customs/NavBar";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  // console.log("id: ", React.useId());
  return (
    <>
      {/* <Button className={cn("m-5 p-5")}>Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="destructive" className={cn("p-5 m-5")}>
        Button
      </Button>
      <Button variant="outline">Button</Button> */}
      {/* <SignIn /> */}
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
