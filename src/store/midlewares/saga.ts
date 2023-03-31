import { take, takeEvery } from "redux-saga/effects";
import { invoiceWorker } from "./workers/invoice";

export function* sagaWatcher() {
  yield takeEvery("invoice/getInvoices", invoiceWorker);
}
