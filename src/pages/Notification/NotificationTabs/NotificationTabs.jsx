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
import { BookDashedIcon, InboxIcon, SendIcon } from "lucide-react";
import Draft from "../Draft/Draft";

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
          <TabsTrigger value="draft" className="flex justify-start">
            <BookDashedIcon className="mx-3" />
            Draft
          </TabsTrigger>
        </TabsList>
        <div>
          <Inbox />
          <Sent />
          <Draft />
        </div>
      </Tabs>
    </>
  );
};

export default NotificationTabs;
