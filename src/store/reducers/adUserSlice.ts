import { createSlice } from "@reduxjs/toolkit";
import { IADUser } from "../../utils/types";

interface IState {
    data: IADUser[]
}

const initialState: IState = {
    data: []
}

const adUserSlice = createSlice({
    name: "ad-users",
    initialState,
    reducers: {
        getAllADUsers: () => {},
        getAllADUsersSuccessed: (state , action) => {
            state.data = [...action.payload]
        }
    }
})

export const {getAllADUsers , getAllADUsersSuccessed} = adUserSlice.actions

export default adUserSlice.reducer