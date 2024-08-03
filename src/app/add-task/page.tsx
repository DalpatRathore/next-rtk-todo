import AddTask from "@/components/AddTask";
import CalendarDate from "@/components/CalendarDate";
import TasksList from "@/components/TasksList";

const AddTaskPage = () => {
  return (
    <main className="w-full flex flex-col-reverse md:flex-row items-start justify-between gap-5 max-w-7xl px-5 mx-auto my-12">
      <div className="w-full flex flex-col items-center gap-5">
        <AddTask></AddTask>
        <CalendarDate></CalendarDate>
      </div>
      <TasksList></TasksList>
    </main>
  );
};

export default AddTaskPage;
