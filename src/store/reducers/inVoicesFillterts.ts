import { createSlice } from "@reduxjs/toolkit";
import { IInvoiceFilters } from "../../utils/types";
import { isExist } from "../../utils/invoices/service";

const initialState: IInvoiceFilters = {
  fields: [],
  dates: {
    startDate: "",
    endDate: "",
  },
  filterBy: [],
};

const invoisFilltersSlice = createSlice({
  name: "invoiceFillters",
  initialState,
  reducers: {
    // changeFillters: (
    //   state,
    //   action: { type: string; payload: { field: string; data: any } }
    // ) => {
    //   console.log(action.payload);
    //   state[action.payload.field] = action.payload.data;
    // },
    changeDates: (
      state,
      action: { type: string; payload: { field: string; data: any } }
    ) => {
      state.dates[action.payload.field] = action.payload.data;
    },
    resetDates: (state, action) => {
      state.dates.startDate = "";
      state.dates.endDate = "";
    },
    changeFilterBy: (state, action) => {
      const result = isExist(action.payload, state.filterBy);
      if (!result) state.filterBy?.push(action.payload);
    },
  },
});

export default invoisFilltersSlice.reducer;

export const { changeDates, resetDates, changeFilterBy } =
  invoisFilltersSlice.actions;
