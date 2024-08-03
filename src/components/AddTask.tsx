"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addTask } from "@/redux/taskSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { PlusCircledIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  task: z.string().min(2, {
    message: "Task must be at least 2 characters.",
  }),
});

const AddTask = () => {
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    dispatch(addTask(values));
    form.reset();
    toast.success("Task added successfully!");
  };
  return (
    <div className="border shadow rounded-md p-5 w-full max-w-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="task"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Task Name</FormLabel>
                <FormControl>
                  <Input placeholder="For e.g. Go for gym" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            size={"lg"}
            className=" w-full"
          >
            Add Task
            <PlusCircledIcon className="ml-2"></PlusCircledIcon>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddTask;
