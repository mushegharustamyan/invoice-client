import { createSlice } from "@reduxjs/toolkit";
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
    filterInvoices: (state, action) => {},
    filterInvoicesSuccessed: (state, action) => {
      const target = action.payload;
      state.data = target;
    },
    getInvoices: () => {},
    getAllInvoicesSuccessed: (state, action) => {
      const payload = action.payload;
      state.data = [...payload];
    },
  },
});

export default invoiceSlice.reducer;

export const {
  getInvoices,
  getAllInvoicesSuccessed,
  filterInvoices,
  filterInvoicesSuccessed,
} = invoiceSlice.actions;
