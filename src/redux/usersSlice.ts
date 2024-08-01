import { createSlice , nanoid,PayloadAction, current } from "@reduxjs/toolkit";


type User={
    id:string;
    name:string;
}
type UserState ={
    users:User[];
}

// Initialize state with data from localStorage or an empty array
const initialState: UserState = {
    users: JSON.parse(localStorage.getItem("users") || "[]"),
};

type AddUserPayload={
    username:string;
}
type EditUserPayload={
    id:string;
    username:string;
}
type RemoveUserPayload={
    id:string;
    
}

// Helper function to update localStorage
const updateLocalStorage = (users: User[]) => {
    localStorage.setItem("users", JSON.stringify(users));
};

const usersSlice  = createSlice ({
    name:'users',
    initialState,
    reducers:{
        addUser:(state,action:PayloadAction<AddUserPayload>)=>{
            const newUser ={
                id:nanoid(),
                name:action.payload.username
            }
            state.users.push(newUser);
           updateLocalStorage(state.users);
            
        },
      
        removeUser: (state, action: PayloadAction<RemoveUserPayload>) => {
            state.users = state.users.filter(user => user.id !== action.payload.id);
           updateLocalStorage(state.users);
        },
        editUser:(state,action:PayloadAction<EditUserPayload>)=>{
            
            const editUser = state.users.find(user => user.id===action.payload.id);
            if(editUser){
                editUser.name=action.payload.username;
            }
           updateLocalStorage(state.users);
        }

    }
});

export const {addUser,removeUser, editUser}= usersSlice.actions

export default usersSlice.reducer;