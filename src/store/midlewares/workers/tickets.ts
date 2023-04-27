import { call, put } from "redux-saga/effects";
import { addTicket, getAllTickets } from "../../../utils/tickets/service";
import {
  addTicketSuccessed,
  getTicketsSuccessed,
} from "../../reducers/ticketSlice";

export function* ticketWorker(): Generator<unknown> {
  const result = yield call(() => getAllTickets());
  yield put(getTicketsSuccessed(result));
}

export function* addTicketWorker(action: {
  payload: string;
  type: string;
}): Generator<any> {
  const result = yield call(() => addTicket(action.payload));
  yield put(addTicketSuccessed(result));
}
