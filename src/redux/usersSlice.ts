import { createSlice , nanoid,PayloadAction } from "@reduxjs/toolkit";


type User={
    id:string;
    name:string;
}
type UserState ={
    users:User[]
}

const initialState:UserState ={
    users:[]
}

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
        },
      
        removeUser: (state, action: PayloadAction<RemoveUserPayload>) => {
            state.users = state.users.filter(user => user.id !== action.payload.id);
        },
        editUser:(state,action:PayloadAction<EditUserPayload>)=>{
            
            const editUser = state.users.find(user => user.id===action.payload.id);
            if(editUser){
                editUser.name=action.payload.username;
            }
        }

    }
});

export const {addUser,removeUser, editUser}= usersSlice.actions

export default usersSlice.reducer;