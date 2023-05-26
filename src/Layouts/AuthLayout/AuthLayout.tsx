import { Outlet } from "react-router";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useCustomNavigate } from "../../common/helpers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../..";
import { IAuth, IUser } from "../../utils/types";
import { refresh } from "../../store/reducers/authSlice";


export const AuthLayout = () => {
  const dispatch = useDispatch()

  const navigate = useCustomNavigate()

  const token = Cookies.get('token')

  const user = useSelector<RootState>(state => state.authReducer) as IAuth

  useEffect(() => {
    if(!token) {
      navigate(null)
    } else {
      navigate(user.role)
    }
  } , [user.role])

  return <>
    <Outlet />
  </>
}