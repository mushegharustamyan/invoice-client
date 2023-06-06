import { call, put } from "redux-saga/effects";
import { getUsers } from "../../../services/admin/user";
import { getAllUsersSuccessed } from "../../reducers/userSlice";

export function* getUsersWorker ():Generator<unknown> {
    const response = yield call(() => getUsers())
    yield put(getAllUsersSuccessed(response))
}