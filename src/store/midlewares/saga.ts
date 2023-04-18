import { take, takeEvery } from "redux-saga/effects";
import { invoiceWorker } from "./workers/invoice";
import { addTicketWorker, ticketWorker } from "./workers/tickets";

export function* sagaWatcher() {
  yield takeEvery("invoice/getInvoices", invoiceWorker);

  yield takeEvery("tickets/getTickets", ticketWorker);
  yield takeEvery("tickets/addTickets", addTicketWorker);
}
