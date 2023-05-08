import { takeEvery } from "redux-saga/effects";
import { filterInvoicesWorker, invoiceWorker } from "./workers/invoice";
import { addTicketWorker, ticketWorker } from "./workers/tickets";
import { signInWorker, singoutWorker } from "./workers/auth";

export function* sagaWatcher() {
  yield takeEvery("invoice/getInvoices", invoiceWorker);
  yield takeEvery("invoice/filterInvoices", filterInvoicesWorker);

  yield takeEvery("tickets/getTickets", ticketWorker);
  yield takeEvery("tickets/addTicket", addTicketWorker);

  yield takeEvery("user/login", signInWorker);
  yield takeEvery("user/logout", singoutWorker);
}
