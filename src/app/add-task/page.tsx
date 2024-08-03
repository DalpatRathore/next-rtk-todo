import AddTask from "@/components/AddTask";
import TasksList from "@/components/TasksList";

const AddTaskPage = () => {
  return (
    <main className="w-full flex flex-col md:flex-row items-start justify-between gap-5 max-w-7xl px-5 mx-auto my-12">
      <AddTask></AddTask>
      <TasksList></TasksList>
    </main>
  );
};

export default AddTaskPage;
