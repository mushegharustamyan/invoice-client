import Cookies from "js-cookie";
import { put, call } from "redux-saga/effects";
import { refresh, signIn } from "../../../servieces/auth";
import { loginSuccessed, logoutSuccessed, refreshSuccessed } from "../../reducers/authSlice";

export function* signInWorker(action: {
  type: string;
  payload: { username: string; password: string };
}): Generator<unknown> {
  const target = action.payload;
  const { username , password } = target;
  const response = yield call(() => signIn(username, password));
  yield put(loginSuccessed(response));
}

export function* singoutWorker(): Generator<unknown> {
  yield put(logoutSuccessed());
}

export function* refreshWorker() : Generator<unknown> {
  const token = Cookies.get('token')
  const response = yield call(() => refresh())
  yield put(refreshSuccessed({token , response}))
}
