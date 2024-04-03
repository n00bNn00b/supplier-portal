import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const Draft = () => {
  const draftMessages = [
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
      <TabsContent value="draft">
        <Card>
          <CardHeader>
            <CardTitle>Draft</CardTitle>
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
                  {draftMessages.map((draft) => (
                    <TableRow key={draft.id}>
                      <TableCell className="font-medium">
                        {draft.from}
                      </TableCell>
                      <TableCell>{draft.message}</TableCell>
                      <TableCell>{draft.date}</TableCell>
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

export default Draft;
