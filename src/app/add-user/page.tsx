import AddUser from "@/components/AddUser";
import { Separator } from "@/components/ui/separator";
import UsersList from "@/components/UsersList";
import React from "react";

const AddUserPage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto p-20 border rounded-md my-10">
      <AddUser></AddUser>
      <Separator className="my-10"></Separator>
      <UsersList></UsersList>
    </main>
  );
};

export default AddUserPage;
