import { takeEvery, call, put } from "redux-saga/effects";
import { addTicket, getAllTickets } from "../../../utils/ticket";
import { getTicketsSuccessed } from "../../reducers/ticketSlice";

export function* ticketWorker(): Generator<unknown> {
  const result = yield call(() => getAllTickets());
  yield put(getTicketsSuccessed(result));
}

export function* addTicketWorker(action: {
  payload: { action: { payload: string } };
  type: string;
}): Generator<any> {
  const target = action.payload.action.payload;
  const result = yield call(() => addTicket(target));
  yield put(getTicketsSuccessed(result));
}
