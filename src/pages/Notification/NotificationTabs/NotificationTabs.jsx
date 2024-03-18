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
import { InboxIcon, SendIcon } from "lucide-react";

const NotificationTabs = () => {
  return (
    <>
      <Tabs defaultValue="inbox" className="w-auto flex gap-2">
        <TabsList className="grid grid-cols-1 w-48">
          <TabsTrigger value="inbox" className="flex justify-start">
            <InboxIcon className="mx-3" />
            Inbox
          </TabsTrigger>
          <TabsTrigger value="sent" className="flex justify-start">
            <SendIcon className="mx-3" />
            Sent
          </TabsTrigger>
        </TabsList>
        <div>
          <Inbox />
          <Sent />
        </div>
      </Tabs>
    </>
  );
};

export default NotificationTabs;
