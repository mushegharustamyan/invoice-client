import { call , put} from "redux-saga/effects";
import { getRoles } from "../../../services/admin/role";
import { getAllRolesSuccessed } from "../../reducers/roleSlice";

export function* rolesWorker(): Generator<unknown> {
    const result = yield call(() => getRoles())
    yield put(getAllRolesSuccessed(result))
}