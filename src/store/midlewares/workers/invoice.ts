import { useLocation } from "react-router";
import { call, put } from "redux-saga/effects";
import { getAllInvoices } from "../../../utils/invoices";
import { getAllInvoicesSuccessed } from "../../reducers/invoiceSlice";

export function* invoiceWorker(): Generator<unknown> {
  const result = yield call(() => getAllInvoices());
  yield put(getAllInvoicesSuccessed(result));
}
