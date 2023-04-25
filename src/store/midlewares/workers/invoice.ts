import { call, put } from "redux-saga/effects";
import {
  filterInvoices,
  getAllInvoices,
} from "../../../utils/invoices/service";
import {
  filterInvoicesSuccessed,
  getAllInvoicesSuccessed,
} from "../../reducers/invoiceSlice";

import { IInvoiceFilters } from "../../../utils/types";

export function* invoiceWorker(action: {
  payload: { action: { payload: { fields: string[] } } };
  type: string;
}): Generator<unknown> {
  const target = action.payload.action.payload;
  const result = yield call(() => getAllInvoices(target));
  yield put(getAllInvoicesSuccessed(result));
}

export function* filterInvoicesWorker(action: {
  payload: IInvoiceFilters;
  type: string;
}): Generator<unknown> {
  console.log("worker");
  const target = action.payload;
  const result = yield call(() => filterInvoices(target));
  yield put(filterInvoicesSuccessed(result));
}
