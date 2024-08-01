"use client";
import {
  BellIcon,
  CodeIcon,
  TrashIcon,
  ValueIcon,
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

type CardProps = React.ComponentProps<typeof Card>;

const UsersList = ({ className, ...props }: CardProps) => {
  const users = useSelector((state: RootState) => state.users.users);

  const dispatch = useDispatch();

  const handleRemoveUser = (id: string) => {
    dispatch(removeUser({ id }));
  };

  return (
    <Card className={cn("max-w-3xl mx-auto", className)} {...props}>
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
                  <Button
                    variant={"destructive"}
                    size={"icon"}
                    onClick={() => handleRemoveUser(user.id)}
                  >
                    <TrashIcon></TrashIcon>
                  </Button>
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
  );
};

export default UsersList;
