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

const Sent = () => {
  const sentMessages = [
    {
      id: 1,
      to: "John",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima similique incidunt ab qui itaque doloribus magni praesentium! Odit, corrupti maiores!",
      date: "3/12/2023",
    },
    {
      id: 2,
      to: "Miller",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima similique incidunt ab qui itaque doloribus magni praesentium! Odit, corrupti maiores!",
      date: "3/11/2023",
    },
    {
      id: 3,
      to: "Lucy",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima similique incidunt ab qui itaque doloribus magni praesentium! Odit, corrupti maiores!",
      date: "3/10/2023",
    },
  ];
  return (
    <>
      <TabsContent value="sent">
        <Card>
          <CardHeader>
            <CardTitle>Sent Messages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] font-bold">To</TableHead>
                    <TableHead className="font-bold">Subject</TableHead>
                    <TableHead className="font-bold">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sentMessages.map((sent) => (
                    <TableRow key={sent.id}>
                      <TableCell className="font-medium">{sent.to}</TableCell>
                      <TableCell>{sent.message}</TableCell>
                      <TableCell>{sent.date}</TableCell>
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

export default Sent;
