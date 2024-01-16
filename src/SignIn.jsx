import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Card className={cn("w-96 mx-auto")}>
      <CardHeader>
        <CardTitle className={cn("mx-auto")}>Sign In</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Label htmlFor="email">Email</Label>
        <Input type="email" placeholder="Email" className={cn("my-3")} />
        <Label htmlFor="password">Password</Label>
        <Input type="email" placeholder="Password" className={cn("my-3")} />
        <Button
          className={cn("flex mx-auto bg-blue-500 hover:bg-blue-600")}
          onClick={() => console.log("Clicked!")}
        >
          Sign In
        </Button>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default SignIn;
