import { takeEvery } from "redux-saga/effects";
import { filterInvoicesWorker, invoiceWorker } from "./workers/invoice";
import { addTicketWorker, ticketWorker } from "./workers/tickets";
import { refreshWorker, signInWorker, singoutWorker } from "./workers/auth";
import { rolesWorker } from "./workers/roles";
import { getADUsersWorker } from "./workers/adUser";
import { getUsersWorker } from "./workers/users";

export function* sagaWatcher() {
  yield takeEvery("invoice/getInvoices", invoiceWorker);
  yield takeEvery("invoice/filterInvoices", filterInvoicesWorker);

  yield takeEvery("tickets/getTickets", ticketWorker);
  yield takeEvery("tickets/addTicket", addTicketWorker);

  yield takeEvery("auth/login", signInWorker);
  yield takeEvery("auth/logout", singoutWorker);

  yield takeEvery("auth/refresh", refreshWorker)
  yield takeEvery("roles/getAllRoles", rolesWorker)

  yield takeEvery("ad-users/getAllADUsers", getADUsersWorker)

  yield takeEvery("users/getAllUsers", getUsersWorker)
}
