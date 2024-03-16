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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import Inbox from "../Inbox/Inbox";
import Sent from "../Sent/Sent";

const NotificationTabs = () => {
  return (
    <>
      <Tabs defaultValue="inbox" className="w-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="inbox">Inbox</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
        </TabsList>
        <Inbox />
        <Sent />
      </Tabs>
    </>
  );
};

export default NotificationTabs;
