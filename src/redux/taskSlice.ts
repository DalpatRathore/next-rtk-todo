import { createSlice , nanoid,PayloadAction, current } from "@reduxjs/toolkit";


type Task={
    id:string;
    name:string;
}
type TaskState ={
    tasks:Task[];
}

// Initialize state with data from localStorage or an empty array
const initialState: TaskState = {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
};

type AddTaskPayload={
    task:string;
}
type EditTaskPayload={
    id:string;
    task:string;
}
type RemoveTaskPayload={
    id:string;
    
}

// Helper function to update localStorage
const updateLocalStorage = (tasks: Task[]) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const tasksSlice  = createSlice ({
    name:'tasks',
    initialState,
    reducers:{
        addTask:(state,action:PayloadAction<AddTaskPayload>)=>{
            const newTask ={
                id:nanoid(),
                name:action.payload.task
            }
            state.tasks.push(newTask);
           updateLocalStorage(state.tasks);
            
        },
      
        removeTask: (state, action: PayloadAction<RemoveTaskPayload>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
           updateLocalStorage(state.tasks);
        },
        editTask:(state,action:PayloadAction<EditTaskPayload>)=>{
            
            const editTask = state.tasks.find(task => task.id===action.payload.id);
            if(editTask){
                editTask.name=action.payload.task;
            }
           updateLocalStorage(state.tasks);
        }

    }
});

export const {addTask,removeTask, editTask}= tasksSlice.actions

export default tasksSlice.reducer;