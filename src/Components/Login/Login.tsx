import React, { useEffect, useRef, useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../TextInput/TextInput"
import styles from "./styles.module.css"
import { signIn } from "../../servieces/auth"
import { useDispatch, useSelector } from "react-redux"
import Cookies from "js-cookie"
// import { useNavigate } from "react-router"
import { login } from "../../store/reducers/authSlice"
import { RootState } from "../.."
import { IUser } from "../../utils/types"
import { useNavigate } from "react-router"

export const Login = () => {
  const dispatch = useDispatch()

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const token = Cookies.get('token')

  const navigate = useNavigate()

  const changeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const changePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const user = useSelector<RootState>(state => state.authReducer) as IUser

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(login({email , password}))
  }

  return (
    <div className={styles.page}>
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <Input width={350} text="Email" action={changeEmail}/>
          <Input width={350} text="Password" action={changePassword} type="password"/>
          <Button width={350} text="Sign In" action={handleLogin}/>
        </div>
      </form>
    </div>
  )
}