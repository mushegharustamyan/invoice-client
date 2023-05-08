import { Outlet } from "react-router";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useCustomNavigate } from "../../common/helpers";
import { useSelector } from "react-redux";
import { RootState } from "../..";



export const AuthLayout = () => {

  const navigate = useCustomNavigate()

  const token = Cookies.get('token')

  const user = useSelector<RootState>(state => state.userReducer)

  console.log(user)

  console.log(token)

  useEffect(() => {
    
  } , [token])

  return <>
    <Outlet />
  </>
}