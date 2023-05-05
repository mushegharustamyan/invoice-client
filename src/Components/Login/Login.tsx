import React, { useRef, useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../TextInput/TextInput"
import styles from "./styles.module.css"
import { signIn } from "../../servieces/auth"
import { useDispatch } from "react-redux"
import Cookies from "js-cookie"
import { useNavigate } from "react-router"

export const Login = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const changeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const changePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const token = await signIn(email , password)
    try{
      Cookies.set('token' , token)
      navigate('/invoices')
    } catch {
      alert("error")
    }
  }

  return (
    <div className={styles.page}>
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <Input width={350} text="Email" action={changeEmail}/>
          <Input width={350} text="Password" action={changePassword}/>
          <Button width={350} text="Sign In" action={handleLogin}/>
        </div>
      </form>
    </div>
  )
}