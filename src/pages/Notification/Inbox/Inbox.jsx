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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import React from "react";

const Inbox = () => {
  const inboxMessages = [
    {
      id: 1,
      from: "John",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima similique incidunt ab qui itaque doloribus magni praesentium! Odit, corrupti maiores!",
      date: "3/12/2023",
    },
    {
      id: 2,
      from: "Miller",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima similique incidunt ab qui itaque doloribus magni praesentium! Odit, corrupti maiores!",
      date: "3/11/2023",
    },
    {
      id: 3,
      from: "Lucy",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima similique incidunt ab qui itaque doloribus magni praesentium! Odit, corrupti maiores!",
      date: "3/10/2023",
    },
  ];
  return (
    <>
      <TabsContent value="inbox">
        <Card>
          <CardHeader>
            <CardTitle>Inbox</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] font-bold">From</TableHead>
                    <TableHead className="font-bold">Subject</TableHead>
                    <TableHead className="font-bold">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inboxMessages.map((inbox) => (
                    <TableRow key={inbox.id}>
                      <TableCell className="font-medium">
                        {inbox.from}
                      </TableCell>
                      <TableCell>{inbox.message}</TableCell>
                      <TableCell>{inbox.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default Inbox;
