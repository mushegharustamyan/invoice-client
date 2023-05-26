import { call, put } from "redux-saga/effects";
import { getUsers } from "../../../servieces/admin/user";
import { getAllUsersSuccessed } from "../../reducers/userSlice";

export function* getUsersWorker ():Generator<unknown> {
    const response = yield call(() => getUsers())
    yield console.log(response)
    yield put(getAllUsersSuccessed(response))
}