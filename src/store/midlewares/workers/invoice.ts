import { call, put } from "redux-saga/effects";
import { getAllInvoices } from "../../../utils/invoices/service";
import { getAllInvoicesSuccessed } from "../../reducers/invoiceSlice";

import { IInvoiceFilters } from "../../../utils/types";

export function* invoiceWorker(action: {
  payload: { action: { payload: IInvoiceFilters } };
  type: string;
}): Generator<unknown> {
  const target = action.payload.action.payload;
  console.log(target);
  const result = yield call(() => getAllInvoices(target));
  yield put(getAllInvoicesSuccessed(result));
}
