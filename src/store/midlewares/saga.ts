import { takeEvery } from "redux-saga/effects";
import { filterInvoicesWorker, invoiceWorker } from "./workers/invoice";

export function* sagaWatcher() {
  yield takeEvery("invoice/getInvoices", invoiceWorker);
  yield takeEvery("invoice/filterInvoices", filterInvoicesWorker);
}
