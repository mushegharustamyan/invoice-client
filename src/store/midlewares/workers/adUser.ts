import { call, put } from "redux-saga/effects";
import { getADusers } from "../../../services/admin/ad-users";
import { getAllADUsersSuccessed } from "../../reducers/adUserSlice";

export function * getADUsersWorker():Generator<unknown> {
  const response = yield call(() => getADusers())
  yield put(getAllADUsersSuccessed(response))  
}