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
import { removeTask, toggleTaskCompletion } from "@/redux/taskSlice";
import EditTask from "./EditTask";
import { useState } from "react";
import toast from "react-hot-toast";
import { formatDate } from "date-fns";
import { formatDateTime } from "@/lib/formatter";
import { Checkbox } from "./ui/checkbox";

type CardProps = React.ComponentProps<typeof Card>;

const TasksList = ({ className, ...props }: CardProps) => {
  const [open, setOpen] = useState(false);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  console.log(tasks);

  const dispatch = useDispatch();

  const handleRemoveTask = (id: string) => {
    dispatch(removeTask({ id }));
    toast.success("Task deleted successfully!");
  };

  const handleEditClick = (id: string) => {
    setSelectedTaskId(id);
    setOpen(true);
  };
  const handleTaskCompletionToggle = (id: string) => {
    dispatch(toggleTaskCompletion({ id }));
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
                  className="flex items-start justify-between gap-2 border-b pb-3"
                >
                  <Checkbox
                    className="translate-y-2 mr-2 w-5 h-5"
                    checked={task.completed}
                    onCheckedChange={() => handleTaskCompletionToggle(task.id)}
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <div className="space-y-1">
                      <p
                        className={cn(
                          "text-base font-medium leading-relaxed capitalize",
                          task.completed && "line-through"
                        )}
                      >
                        {task.name}
                      </p>
                      <div className="flex items-center justify-center gap-1">
                        <span className="flex h-2 w-2 rounded-full bg-sky-500" />
                        <span className="text-xs text-muted-foreground">
                          {formatDateTime(task.date)}
                        </span>
                      </div>
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
              <p className="text-muted-foreground my-5 italic flex items-center justify-center gap-2">
                No tasks <ValueNoneIcon></ValueNoneIcon>
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant={"secondary"}>
            <CodeIcon className="mr-2 h-5 w-5" />
            React.js, Next.js, Tailwind CSS, Shadcn-Ui, & Redux Toolkit.
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default TasksList;
