import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import supabase from "@/dbutils/dbutils";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const { data, error } = await supabase
      .from("user_persons_view")
      .select("*");
    console.log(data);
    setUsers(data);
    return data;
  };
  return (
    <Table className="border rounded-lg overflow-x-scroll border-red-500 mx-5 w-[auto]">
      <TableCaption>A list of Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>User ID</TableHead>
          <TableHead>User Name</TableHead>
          <TableHead>First Name</TableHead>
          <TableHead>Middle Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Job Title</TableHead>
          <TableHead>Organization Type</TableHead>
          <TableHead>Organization ID</TableHead>
          <TableHead>Organization ID Column Name</TableHead>
          <TableHead>Organization ID Table Name</TableHead>
          <TableHead>Domain Name</TableHead>
          <TableHead className="text-right">GUID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.user_id}</TableCell>
            <TableCell>{user.user_name}</TableCell>
            <TableCell>{user.first_name}</TableCell>
            <TableCell>{user.middle_name}</TableCell>
            <TableCell>{user.last_name}</TableCell>
            <TableCell>{user.job_title}</TableCell>
            <TableCell>{user.org_type}</TableCell>
            <TableCell>{user.org_id}</TableCell>
            <TableCell>{user.org_id_column_name}</TableCell>
            <TableCell>{user.org_id_table_name}</TableCell>
            <TableCell>{user.domain_name}</TableCell>
            <TableCell className="text-right">{user.guid}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserList;
