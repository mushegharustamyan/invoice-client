import { createSlice } from "@reduxjs/toolkit";
import { IInvoiceFilters } from "../../utils/types";

const initialState: IInvoiceFilters = {}

const invoisFilltersSlice = createSlice({
    name: "invoiceFillters",
    initialState,
    reducers: {
     changeFillters: (state , action: {type: string , payload: {field: string, data: any}}) => {
        state?[action.payload.field] = action.payload.data : null
     }   
    }
})

export default invoisFilltersSlice.reducer

export const {changeFillters} = invoisFilltersSlice.actions