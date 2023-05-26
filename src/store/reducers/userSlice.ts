import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../utils/types";

interface IState {
    data: IUser []
}

const initialState: IState = {
    data: []
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getAllUsers: () => {},
        getAllUsersSuccessed: (state , action) => {
            state.data = [...action.payload]
        }
    }
})

export default userSlice.reducer

export const {getAllUsers , getAllUsersSuccessed} = userSlice.actions