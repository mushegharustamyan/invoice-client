import { createSlice } from "@reduxjs/toolkit";
import { IRole } from "../../utils/types";

interface IState {
    data: IRole[]
}

const initialState:IState  = {
    data: []
} 

const roleSlice = createSlice({
    name: "roles",
    initialState,
    reducers: {
        getAllRoles: () => {},
        getAllRolesSuccessed: (state , action) => {
            state.data = [...action.payload.data]
        }
    }
})

export default roleSlice.reducer

export const {getAllRoles , getAllRolesSuccessed} = roleSlice.actions