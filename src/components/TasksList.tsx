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
import { removeTask } from "@/redux/taskSlice";
import EditTask from "./EditTask";
import { useState } from "react";
import toast from "react-hot-toast";

type CardProps = React.ComponentProps<typeof Card>;

const TasksList = ({ className, ...props }: CardProps) => {
  const [open, setOpen] = useState(false);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const dispatch = useDispatch();

  const handleRemoveTask = (id: string) => {
    dispatch(removeTask({ id }));
    toast.success("Task deleted successfully!");
  };

  const handleEditClick = (id: string) => {
    setSelectedTaskId(id);
    setOpen(true);
  };

  return (
    <>
      {open && selectedTaskId && (
        <EditTask
          id={selectedTaskId}
          open={open}
          onClose={() => setOpen(false)}
        ></EditTask>
      )}
      <Card className={cn("w-full", className)} {...props}>
        <CardHeader className="text-center">
          <CardTitle>Tasks List</CardTitle>
          <CardDescription>You have {tasks.length} tasks.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <BellIcon />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Add Tasks</p>
              <p className="text-xs text-muted-foreground">
                Let your productivity shine!
              </p>
            </div>
            <CodeIcon className="h-6 w-6"></CodeIcon>
          </div>
          <div className="space-y-3">
            {tasks.length > 0 ? (
              tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-start justify-between gap-2"
                >
                  <span className="flex h-2 w-2 translate-y-3 rounded-full bg-sky-500" />
                  <div className="flex-1 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-relaxed capitalize">
                        {task.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{task.id}</p>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                      <Button
                        variant={"default"}
                        size={"icon"}
                        onClick={() => handleEditClick(task.id)}
                      >
                        <Pencil2Icon></Pencil2Icon>
                      </Button>
                      <Button
                        variant={"destructive"}
                        size={"icon"}
                        onClick={() => handleRemoveTask(task.id)}
                      >
                        <TrashIcon></TrashIcon>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground my-10 italic flex items-center justify-center gap-2">
                No tasks <ValueNoneIcon></ValueNoneIcon>
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant={"secondary"}>
            <CodeIcon className="mr-2 h-5 w-5" />
            Next.js Todo with ReduxToolkit (RTK)
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default TasksList;
