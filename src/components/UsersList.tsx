"use client";
import {
  BellIcon,
  CodeIcon,
  Pencil2Icon,
  TrashIcon,
  ValueNoneIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeUser } from "@/redux/usersSlice";
import EditUser from "./EditUser";
import { useState } from "react";
import toast from "react-hot-toast";

type CardProps = React.ComponentProps<typeof Card>;

const UsersList = ({ className, ...props }: CardProps) => {
  const [open, setOpen] = useState(false);
  const users = useSelector((state: RootState) => state.users.users);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const dispatch = useDispatch();

  const handleRemoveUser = (id: string) => {
    dispatch(removeUser({ id }));
    toast.success("Username deleted!");
  };

  const handleEditClick = (id: string) => {
    setSelectedUserId(id);
    setOpen(true);
  };

  return (
    <>
      {open && selectedUserId && (
        <EditUser
          id={selectedUserId}
          open={open}
          onClose={() => setOpen(false)}
        ></EditUser>
      )}
      <Card className={cn("w-full", className)} {...props}>
        <CardHeader className="text-center">
          <CardTitle>Users List</CardTitle>
          <CardDescription>You have {users.length} users.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <BellIcon />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Push Users</p>
              <p className="text-sm text-muted-foreground">
                Send users to device.
              </p>
            </div>
            <CodeIcon className="h-6 w-6"></CodeIcon>
          </div>
          <div className="space-y-3">
            {users.length > 0 ? (
              users.map(user => (
                <div
                  key={user.id}
                  className="flex items-start justify-between gap-2"
                >
                  <span className="flex h-2 w-2 translate-y-3 rounded-full bg-sky-500" />
                  <div className="flex-1 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-xl font-medium leading-relaxed capitalize">
                        {user.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{user.id}</p>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                      <Button
                        variant={"default"}
                        size={"icon"}
                        onClick={() => handleEditClick(user.id)}
                      >
                        <Pencil2Icon></Pencil2Icon>
                      </Button>
                      <Button
                        variant={"destructive"}
                        size={"icon"}
                        onClick={() => handleRemoveUser(user.id)}
                      >
                        <TrashIcon></TrashIcon>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground my-10 italic flex items-center justify-center gap-2">
                No users <ValueNoneIcon></ValueNoneIcon>
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant={"secondary"}>
            <CodeIcon className="mr-2 h-4 w-4" />
            Next.js with ReduxToolkit
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default UsersList;
