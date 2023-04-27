import { createSlice } from "@reduxjs/toolkit";
import { ITicket } from "../../utils/types";

interface IState {
  data: ITicket[];
}

const initialState: IState = {
  data: [],
};

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    getTickets: () => {},
    getTicketsSuccessed: (state, action) => {
      state.data = [...action.payload];
    },
    addTicket: (state, action) => {},
    addTicketSuccessed: (state, action) => {
      // state.data.push(action.payload);
      console.log(action.payload);
      state.data.push({
        id: 2,
        description: action.payload,
      });
    },
  },
});

export default ticketSlice.reducer;

export const {
  getTickets,
  getTicketsSuccessed,
  addTicket,
  addTicketSuccessed,
} = ticketSlice.actions;
