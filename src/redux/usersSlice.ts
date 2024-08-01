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
    username:string
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
        }

    }
});

export const {addUser}= usersSlice.actions

export default usersSlice.reducer;