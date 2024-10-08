import { createSlice , nanoid,PayloadAction, current } from "@reduxjs/toolkit";


type Task = {
    id: string;
    name: string;
    date: Date;
    completed: boolean;
  };
  
  type TaskState = {
    tasks: Task[];
  };


 

// Define payload types
type AddTaskPayload = {
    task: string;
  };
  
  type EditTaskPayload = {
    id: string;
    task: string;
  };
  
  type RemoveTaskPayload = {
    id: string;
  };
  
  type ToggleTaskCompletionPayload = {
    id: string;
  };



// Helper function to get tasks from localStorage
const getTasksFromLocalStorage = (): Task[] => {
  if (typeof localStorage !== 'undefined') {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) as Task[] : [];
    } catch (error) {
      console.error('Error parsing tasks from localStorage:', error);
      return [];
    }
  }
  return [];
};

// Initialize state with data from localStorage or an empty array
const initialState: TaskState = {
  tasks: getTasksFromLocalStorage(),
};

// Helper function to update localStorage
const updateLocalStorage = (tasks: Task[]) => {
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }
};

const tasksSlice  = createSlice ({
    name:'tasks',
    initialState,
    reducers:{
        
        addTask: (state, action: PayloadAction<AddTaskPayload>) => {
            const newTask: Task = {
              id: nanoid(),
              name: action.payload.task,
              date: new Date(),
              completed: false,
            };
            state.tasks.push(newTask);
            updateLocalStorage(state.tasks);
          },
      
          removeTask: (state, action: PayloadAction<RemoveTaskPayload>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
            updateLocalStorage(state.tasks);
          },

   
        editTask: (state, action: PayloadAction<EditTaskPayload>) => {
            const editTask = state.tasks.find((task) => task.id === action.payload.id);
            if (editTask) {
              editTask.name = action.payload.task;
              updateLocalStorage(state.tasks);
            }
          },
          toggleTaskCompletion: (state, action: PayloadAction<ToggleTaskCompletionPayload>) => {
            const task = state.tasks.find((task) => task.id === action.payload.id);
            if (task) {
              task.completed = !task.completed;
              updateLocalStorage(state.tasks);
            }
          },

    }
});

export const {addTask,removeTask, editTask,toggleTaskCompletion}= tasksSlice.actions

export default tasksSlice.reducer;