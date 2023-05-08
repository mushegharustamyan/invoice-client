import { put, call } from "redux-saga/effects";
import { signIn } from "../../../servieces/auth";
import { loginSuccessed, logoutSuccessed } from "../../reducers/userSlice";

export function* signInWorker(action: {
  type: string;
  payload: { email: string; password: string };
}): Generator<unknown> {
  const target = action.payload;
  console.log(action.payload);
  const { email, password } = target;
  const response = yield call(() => signIn(email, password));
  yield put(loginSuccessed(response));
}

export function* singoutWorker(): Generator<unknown> {
  yield put(logoutSuccessed());
}
