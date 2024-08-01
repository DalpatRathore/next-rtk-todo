import AddUser from "@/components/AddUser";
import { Separator } from "@/components/ui/separator";
import UsersList from "@/components/UsersList";
import React from "react";

const AddUserPage = () => {
  return (
    <main className="w-full flex flex-col md:flex-row items-start justify-between gap-5 max-w-7xl px-5 mx-auto my-10">
      <AddUser></AddUser>
      <UsersList></UsersList>
    </main>
  );
};

export default AddUserPage;
