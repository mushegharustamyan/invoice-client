import React, { useEffect, useRef, useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../TextInput/TextInput"
import styles from "./styles.module.css"
import { signIn } from "../../servieces/auth"
import { useDispatch, useSelector } from "react-redux"
import Cookies from "js-cookie"
// import { useNavigate } from "react-router"
import { useCustomNavigate } from "../../common/helpers"
import { login } from "../../store/reducers/userSlice"
import { RootState } from "../.."
import { IUser } from "../../utils/types"

export const Login = () => {
  const dispatch = useDispatch()

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const token = Cookies.get('token')

  const navigate = useCustomNavigate()

  const changeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const changePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const user = useSelector<RootState>(state => state.userReducer) as IUser

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