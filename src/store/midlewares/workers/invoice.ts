import { filterInvoices } from "../../../utils/invoices/service";
import { call, put } from "redux-saga/effects";
import { getAllInvoices } from "../../../utils/invoices/service";
import {
  filterInvoicesSuccessed,
  getAllInvoicesSuccessed,
} from "../../reducers/invoiceSlice";

export function* invoiceWorker(): Generator<unknown> {
  const result = yield call(() => getAllInvoices());
  yield put(getAllInvoicesSuccessed(result));
}

export function* filterInvoicesWorker(action: {
  payload: { action: { payload: string[] } };
  type: string;
}): Generator<any> {
  const target = action.payload.action.payload;
  const result = yield call(() => filterInvoices(target));
  yield put(filterInvoicesSuccessed(result));
}
