import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import Cookies from 'js-cookie';



export const AuthLayout = () => {

  const navigate = useNavigate()

  const token = Cookies.get('token')

  console.log(token)

  useEffect(() => {
    if(token) {
      navigate("/invoices")
    } else {
      navigate("/")
    }
  } , [token])

  return <>
    <Outlet />
  </>
}