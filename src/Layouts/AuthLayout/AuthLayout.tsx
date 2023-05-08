import { Outlet } from "react-router";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useCustomNavigate } from "../../common/helpers";
import { useSelector } from "react-redux";
import { RootState } from "../..";
import { IUser } from "../../utils/types";



export const AuthLayout = () => {

  const navigate = useCustomNavigate()

  const token = Cookies.get('token')

  const user = useSelector<RootState>(state => state.userReducer) as IUser

  navigate(user.role || "")

  return <>
    <Outlet />
  </>
}