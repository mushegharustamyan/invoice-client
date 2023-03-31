import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { IDocument } from "../../utils/types";

interface IState {
  data: IDocument[];
}

const initialState: IState = {
  data: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    getInvoices: () => {},
    getAllInvoicesSuccessed: (state, action) => {
      const payload = action.payload;
      state.data = [...payload];
    },
  },
});

export default invoiceSlice.reducer;

export const { getInvoices, getAllInvoicesSuccessed } = invoiceSlice.actions;
